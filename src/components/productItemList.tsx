import Colors from '@/src/constants/Colors';
import { Image, StyleSheet,Text,View } from 'react-native';
import { Product } from '../types';

export const defaultImage = 
'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';
type ProductItemListProps = {
  product: Product;
};

const ProductItemList = ({product}: ProductItemListProps) =>{
  return(
    <View style={styles.container}>
    <Image source={{uri:product.image || defaultImage}} style={styles.img} resizeMode="contain"/>
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </View>
  );
};

export default ProductItemList;
const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    padding:10,
    borderRadius:10,
    flex:1,
    
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical:10,
  },
  price :{
    color:Colors.light.tint,
    fontWeight:"bold",
  },
  img:{
    width:"100%",
    aspectRatio:1,
  }
});
