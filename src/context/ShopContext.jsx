import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹ ";
  const delivery_fee = 50;
  const gst_tax_fee = 18;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const [cartItems, setCartItems] = useState({});

  const [tempCartItems, setTempCartItems] = useState([]);

  const [userCartAmountInfo, setuserCartAmountInfo] = useState({});

  // navigate hook of react router dom

  const navigate = useNavigate();

  // coupon Offers

  const couponsData = [
    {
      couponCode: "FESTIVE200",
      offValue: 200,
    },
    {
      couponCode: "FIRSTBUY150",
      offValue: 150,
    },
    {
      couponCode: "FLAT50",
      offValue: 50,
    },
    {
      couponCode: "FLAT100",
      offValue: 100,
    },
  ];

  // userCartData

  console.log("userCartAmountInfo = ", userCartAmountInfo);

  // add to cart function

  const addToCart = async (itemId, size, quantity) => {
    // let cartdata = { ...cartItems };

    // let itemQuantity = quantity;
    // console.log("product item data = ", itemId, size, itemQuantity);

    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    // ---------------

    // reference video code

    // if (cartdata[itemId]) {
    //   if (cartdata[itemId][size]) {
    //     cartdata[itemId][size] += 1;
    //   } else {
    //     cartdata[itemId][size] = 1;
    //   }
    // } else {
    //   cartdata[itemId] = {};
    //   cartdata[itemId][size] = 1;
    // }

    // setCartItems(cartdata);

    // ---------------

    // My code for quantity

    // let myCartItems2 = {
    //   aabbcc:   {S: 2 , L: 6, M: 6, XL: 5, XXL: 5 },
    // };

    let cartData2 = { ...cartItems };

    if (cartData2[itemId]) {
      console.log("executed 1");

      if (!cartData2[itemId][size]) {
        cartData2[itemId][size] = quantity;
        console.log("executed 2");
      } else {
        cartData2[itemId][size] = quantity;
        console.log("executed 3");
      }
    } else {
      cartData2[itemId] = {};
      if (!cartData2[itemId][size]) {
        cartData2[itemId][size] = quantity;
        console.log("executed 4");
      } else {
        cartData2[itemId][size] = quantity;
        console.log("executed 5");
      }
      console.log("executed 6");
    }
    console.log(cartData2);
    setCartItems(cartData2);
  };

  // get cartcount function for navbar cart item counter

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      // console.log("layer1 = ", items);
      for (const item in cartItems[items]) {
        // console.log("layer2 = ", item);
        // console.log("layer3 = ", cartItems[items][item]);

        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];

            // console.log(totalCount);
          }
        } catch (error) {}
      }
    }

    console.log("totalcount = ", totalCount);

    return totalCount;
  };

  // update cart quntity function

  const updateQuantity = async (id, size, quantity) => {
    let cartItemsCopy = { ...cartItems };
    cartItemsCopy[id][size] = quantity;

    setCartItems(cartItemsCopy);
  };

  // calculate final total cart amount

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalAmount;
  };

  // useffect hook cart items counter

  useEffect(() => {
    // console.log("cartitems", cartItems);
    getCartCount();
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    gst_tax_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    couponsData,

    tempCartItems,
    setTempCartItems,

    userCartAmountInfo,
    setuserCartAmountInfo,
  };

  //   console.log("context api = ", products);

  return (
    <>
      <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    </>
  );
};

export default ShopContextProvider;
