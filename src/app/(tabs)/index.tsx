import { View } from 'react-native';
import products from '@/assets/data/products';
import ProductItemList from '@/src/components/productItemList';


export default function MenuScreen() {
  return (<View>
    <ProductItemList product={products[5]}/>
    <ProductItemList product={products[4]}/>
  </View>);
}


