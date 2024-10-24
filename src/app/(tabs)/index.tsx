import {  FlatList, View } from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@components/productItemList';



export default function MenuScreen() {
  return (
    // <View>
    //   <ProductListItem product={products[0]} />
    //   <ProductListItem product={products[1]} />
    // </View>
    <FlatList 
    data={products} 
    renderItem={({item}) => <ProductListItem product={item} />} 
    numColumns={3}
    contentContainerStyle={{gap:10,padding:10}}
    columnWrapperStyle={{gap:10}}
    />
  );
}


