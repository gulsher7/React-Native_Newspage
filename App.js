import React, {Component} from 'react';
import { 
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text, 
  Image,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  ImageBackground
 } from 'react-native';


 import { 
  scale,
  verticalScale, 
  moderateScale, 
  ScaledSheet, 
} from 'react-native-size-matters';

const myList = [
  {
    title: 'Times of India @timesofindia 4am',
    mess: '.@saiprneeth92, @srikidambi & Co eye medal,',
    read: 'toi.in/Vlju4b/a24gk',
    tags: '#Badminton #SaiPraneeth #KidambiSrikanth ',
    img: 'https://www.gannett-cdn.com/presto/2019/10/17/USAT/29c77e19-9524-41cd-8f8f-cf07c6fa3fee-XXX_NFL_All_Star_Game_Baugh_dec_4067.JPG?crop=2807,1727,x343,y187&width=660&height=407&format=pjpg&auto=webp',
    like: '63'
  },

  {
    title: 'Times of India @timesofindia 4am',
    mess: '.@saiprneeth92, @srikidambi & Co eye medal,',
    read: 'toi.in/Vlju4b/a24gk',
    tags: '#Badminton #SaiPraneeth #KidambiSrikanth ',
    img: 'https://www.gannett-cdn.com/presto/2019/10/17/USAT/29c77e19-9524-41cd-8f8f-cf07c6fa3fee-XXX_NFL_All_Star_Game_Baugh_dec_4067.JPG?crop=2807,1727,x343,y187&width=660&height=407&format=pjpg&auto=webp',
    like: '96'
  },

  {
    title: 'Times of India @timesofindia 4am',
    mess: '.@saiprneeth92, @srikidambi & Co eye medal,',
    read: 'toi.in/Vlju4b/a24gk',
    tags: '#Badminton #SaiPraneeth #KidambiSrikanth ',
    img: 'https://www.gannett-cdn.com/presto/2019/10/17/USAT/29c77e19-9524-41cd-8f8f-cf07c6fa3fee-XXX_NFL_All_Star_Game_Baugh_dec_4067.JPG?crop=2807,1727,x343,y187&width=660&height=407&format=pjpg&auto=webp',
    like: '89'

  },

  {
    title: 'Times of India @timesofindia 4am',
    mess: '.@saiprneeth92, @srikidambi & Co eye medal,',
    read: 'toi.in/Vlju4b/a24gk',
    tags: '#Badminton #SaiPraneeth #KidambiSrikanth ',
    img: 'https://www.gannett-cdn.com/presto/2019/10/17/USAT/29c77e19-9524-41cd-8f8f-cf07c6fa3fee-XXX_NFL_All_Star_Game_Baugh_dec_4067.JPG?crop=2807,1727,x343,y187&width=660&height=407&format=pjpg&auto=webp',
    like: '25'

  },

  {
    title: 'Times of India @timesofindia 4am',
    mess: '.@saiprneeth92, @srikidambi & Co eye medal,',
    read: 'toi.in/Vlju4b/a24gk',
    tags: '#Badminton #SaiPraneeth #KidambiSrikanth ',
    img: 'https://www.gannett-cdn.com/presto/2019/10/17/USAT/29c77e19-9524-41cd-8f8f-cf07c6fa3fee-XXX_NFL_All_Star_Game_Baugh_dec_4067.JPG?crop=2807,1727,x343,y187&width=660&height=407&format=pjpg&auto=webp',
    like: '15'

  },

]

export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      following: '529',
      followers: '12.3M'
    }
  }

  render(){
    const {following, followers} = this.state;
        return (
      <SafeAreaView>
        <ScrollView>
    <View>
      <ImageBackground style = {{width: '100%', height: verticalScale(130) }}  source = {require('./images/bgimage.jpeg')} >
     <TouchableOpacity style = {{position: 'absolute', left: moderateScale(5), top: moderateScale(10)}} >
       <Image style = {{width: scale(30), height: moderateScale(30)}}  source = {require('./images/arrow.png')}/>
      </TouchableOpacity>
     <TouchableOpacity style = {{position: 'absolute', right: moderateScale(5), top: moderateScale(10)}} >
       <Image style = {{width: scale(30), height: moderateScale(30)}}  source = {require('./images/dots9.png')}/>
      </TouchableOpacity>
     </ImageBackground>

     <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScale(-30), paddingHorizontal: moderateScale(5)}}>
     <Image style = {{ borderWidth: 2, borderColor: 'white', borderRadius: moderateScale(50), width: moderateScale(50), height: verticalScale(50) }}  source = {require('./images/logo.jpeg')}/>
     <TouchableOpacity style= {styles.followButton}><Text style = {{color: 'deepskyblue',fontWeight: 'bold'}}>Follow</Text></TouchableOpacity>
     </View>
      </View>


      <View style = {{paddingHorizontal: moderateScale(16), paddingTop: moderateScale(10)}}>
        <Text style = {{fontWeight: 'bold', fontSize: moderateScale(18)}}>Times of India</Text>
        <Text style = {{color: 'gray', marginBottom: moderateScale(15)}}>@timesofindia</Text>
       
       <Text>
        News. Views. Analysis. Conversations. India's No. 1 digital {'\n'} 
        news destination, world's largest-selling{'\n'}
        A Times internet Limited Product.   
      </Text>    

      <View style = {{paddingTop: moderateScale(20)}}>
          <Text><Text style = {{fontWeight: 'bold'}} >{following}</Text>  Following <Text style = {{fontWeight: 'bold'}}>{followers}</Text> Followers</Text>
      </View>

      </View>

 {/* ******************** Flat List Start ********************* */}
      <View style = {{marginTop: moderateScale(20)}}>
      <FlatList 
        data = {myList}
        renderItem = {({item}) =>
        
        <View style = {styles.card}>
          
          <View style = {{flexDirection: 'row'}}> 
          <Image style = {styles.flatImage}  source = {require('./images/logo.jpeg')}/>
          <View style = {{flexDirection: 'column', paddingHorizontal: moderateScale(16)}}>
                  <Text>{item.title}</Text>   
                  <Text>{item.mess}</Text>
                  <Text style = {{marginVertical: moderateScale(20)}}>{item.read}</Text>
                  <Text>{item.tags}</Text>
                  <Text><Image source = {{ uri: item.img }} style = {{width: scale(250), height: verticalScale(100)}} /> </Text>
                  <View style = {styles.fourBottomButton}>
                  <TouchableOpacity ><Image style = {styles.bottomButton}  source = {require('./images/chat.png')}/></TouchableOpacity>
                    <Text><TouchableOpacity ><Image style = {styles.bottomButton}  source = {require('./images/reshare.png')}/></TouchableOpacity></Text>
                    <Text><Text><TouchableOpacity ><Image style = {styles.bottomButton}  source = {require('./images/like.png')}/></TouchableOpacity></Text></Text>
                    <Text><Text><TouchableOpacity ><Image style = {styles.bottomButton}  source = {require('./images/share.png')}/></TouchableOpacity></Text></Text>
                    </View>
        
        </View>
       
        </View>
         
          </View>
      }
      />  
      
      </View>    

 {/* *********************** Flat List End ****************** */}
    </ScrollView>



    {/* *************** Fixed Button ************** */}

    <TouchableOpacity style = {styles.circle}>
      <Text style = {{fontWeight: 'bold', color: 'white'}}>+</Text>
      </TouchableOpacity>

      {/* *************** Fixed Button End ************** */} 

      </SafeAreaView>
    )
  }
}

const styles =StyleSheet.create({
  card: {
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(20)
  },
  followButton: {
    borderWidth: moderateScale(1.5),
    borderColor: 'deepskyblue',
    marginTop: moderateScale(40),
    width: scale(80),
    height: verticalScale(25),
    borderRadius: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    borderRadius: moderateScale(40),
    width: moderateScale(40),
    backgroundColor: 'deepskyblue',
    height: verticalScale(40),
    position: 'absolute',
    right: moderateScale(10),
    bottom: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomButton: {
    width: scale(14), 
    height: moderateScale(14)
  },
  fourBottomButton: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingTop: moderateScale(15),
    width: moderateScale(250)
  },
  flatImage: { 
    borderRadius: moderateScale(40), 
    width: moderateScale(40), 
    height: verticalScale(40) }
})