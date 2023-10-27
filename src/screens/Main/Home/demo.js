// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, Pressable, FlatList, ScrollView, TextInput } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';

// const Home = ({ navigation }) => {
//   const [isselected, setIsSelected] = useState(false);
//   const [cartCount, setCartCount] = useState(0); // State variable to track cart count

//   const handleItemClick = (id)
//  => {
//     setIsSelected(id)
// ;
//   };

//   // Function to increment cart count when an item is added to the cart
//   const addItemToCart = () => {
//     setCartCount(cartCount + 1);
//   };

//   // ... Rest of your code ...

//   return (
//     <View style={styles.container}>
//       <View style={styles.iconcontainer}>
//         <Pressable
//           onPress={() => {
//             navigation.openDrawer();
//           }}>
//           <Icon name="menu" size={28} color={'#000000'} />
//         </Pressable>

//         <Pressable onPress={() => navigation.navigate('Cart')}>
//           <Icon name="shopping-cart" size={28} color={'#000000'} />
//           {cartCount > 0 && ( // Only display the count if there are items in the cart
//             <View style={styles.cartCount}>
//               <Text style={styles.cartCountText}>{cartCount}</Text>
//             </View>
//           )}
//         </Pressable>
//       </View>
//       {/ ... Rest of your code ... /}
//     </View>
//   );
// };
// export default Home;