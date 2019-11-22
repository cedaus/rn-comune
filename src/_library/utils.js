import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from 'res/styles';
import colors from 'res/colors';
import strings from 'res/strings';
import chats_styles from 'styles/chatsStyles.js'

export const InputText = (props) => {
  const {style, placeholder} = props;
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
    />
  );
};


export const InputOTP = (props) => {
  const {style} = props;
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View>
        <TextInput
          style={style} keyboardType='numeric'
          maxLength={1} textAlign={'center'}
        />
      </View>
      <View>
        <TextInput
          style={style} keyboardType='numeric'
          maxLength={1} textAlign={'center'}
        />
      </View>
      <View>
        <TextInput
          style={style} keyboardType='numeric'
          maxLength={1} textAlign={'center'}
        />
      </View>
      <View>
        <TextInput
          style={style} keyboardType='numeric'
          maxLength={1} textAlign={'center'}
        />
      </View>
    </View>
  );
};

export const CustomButton = (props) => {

  const {title, bgColor, textColor, onPress, borderRadius = 0, shadowOpacity, shadowOffset, shadowRadius} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: 50,
        backgroundColor: bgColor,
        borderRadius: borderRadius
      }}
    >
      <Text style={{textAlign: 'center', fontSize: 20, color: textColor}}>{title}</Text>
    </TouchableOpacity>
  )
};

export const TextButton = (props) => {
  const {title, textColor, textSize, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{fontSize: textSize, color: textColor}}>{title}</Text>
    </TouchableOpacity>
  )
};

export const TextIconButton = (props) => {
  const {title, color, textSize, iconSize, onPress} = props;
  return (
    <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}
                      onPress={onPress}>
      <Text style={{color: color, fontWeight: 'bold', textTransform: 'uppercase', marginRight: 20}}>{title}</Text>
      <Icon
        name='ios-add'
        color={color}
        size={iconSize}
      />
    </TouchableOpacity>
  )
};

export const IconButton = (props) => {
  const {name, color, size, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={.5}>
      <Icon
        name={name}
        color={color}
        size={size}
      />
    </TouchableOpacity>
  )
};

export const IconButton2 = (props) => {
  // Square
  const {name, route, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderWidth: 0,
        borderRadius: 3,
        borderColor: colors.borderColorLight,
      }} elevation={1}>
        <Image style={{'width': 30, 'height': 30, marginBottom: 5}} source={route}/>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export const IconButton3 = (props) => {
  // Reactagle
  const {name, route, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 3,
        borderColor: colors.borderColorLight,
        backgroundColor: '#FFF',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8
      }} elevation={1}>
        <Image style={{'width': 30, 'height': 30, marginRight: 5}} source={route}/>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export const IconButton4 = (props) => {
  // Circular
  const {name, color, size, onPress} = props;
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20
      }}>
        <Icon
          name={name}
          color={color}
          size={size}
        />
      </View>
    </TouchableHighlight>
  )
};


export const FloatingButton = (props) => {
  const {name, color} = props;
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 100,
      }}
    >
      <Icon name="ios-add" size={30} color="#01a699"/>
    </TouchableOpacity>
  )
}

export const ArrowButton = (props) => {

  const {title, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: colors.brand,
        borderRadius: 3,
        paddingLeft: 20,
        paddingRight: 20,
      }}
      activeOpacity={0.9}
    >
      <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#FFF'}}>{title}</Text>
      <IconButton
        name="ios-arrow-round-forward"
        color='#FFF'
        size={40}
      />
    </TouchableOpacity>
  )
};

// Blink Component
export class BlinkText extends Component {
  componentDidMount() {
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    ), 1000);
  }

  state = {isShowingText: true};

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={styles.red}>{this.props.text}</Text>
    );
  }
}

//
export class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}! You are {this.props.sex}</Text>
      </View>
    );
  }
}

export const Label = (props) => {
  const {text, mR, onPress} = props;
  return (
    <View style={{padding: 8, borderRadius: 20, backgroundColor: '#FFF', marginRight: mR}}>
      <Text>{text}</Text>
    </View>
  )
};

//

export const ChatRow = (props) => {
  const {name, datetime, lastMessage, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[chats_styles.chatRow]}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}}
          style={[chats_styles.chatImage]}
        />
        <View style={[chats_styles.chatBody]}>
          <View>
            <Text>{name}</Text>
            <Text>{datetime}</Text>
          </View>
          <View>
            <Text>{lastMessage}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};

export const ExpItem = (props) => {
  const {label, labelColor, title, datetime, price} = props;
  return (
    <View style={{width: 150, marginRight: 20}}>
      <View style={{
        height: 150,
        backgroundColor: '#333366',
        borderRadius: 4,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 10,
      }}>
        <View style={{alignSelf: 'flex-start', padding: 3, backgroundColor: labelColor}}>
          <Text style={{color: '#fff', textTransform: 'uppercase', fontSize: 10}}>{label}</Text>
        </View>
      </View>
      <View style={{height: 45}}>
        <Text style={[styles.h6, {fontWeight: 'bold'}]}>{title}</Text>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.h8}>{datetime}</Text>
          <Text style={styles.h8}>{price}</Text>
        </View>
      </View>
    </View>
  )
};

export const ExpItem2 = (props) => {
  const {label, labelColor, title, datetime, price} = props;
  return (
    <View style={{width: 200, marginRight: 20, borderRadius: 4, overflow: 'hidden'}} elevation={1}>
      <View style={{height: 150, backgroundColor: '#333366'}}>
        <View style={{alignSelf: 'flex-start', padding: 3, backgroundColor: labelColor}}>
          <Text style={{color: '#fff', textTransform: 'uppercase', fontSize: 10}}>{label}</Text>
        </View>
      </View>
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        height: 65,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#FFF'
      }}>
        <Text style={[styles.h5, {fontWeight: 'bold'}]}>{title}</Text>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.h8}>{datetime}</Text>
          <Text style={styles.h8}>{price}</Text>
        </View>
      </View>
    </View>
  )
};

export const SearchContainer = (props) => {
  const {placeholder} = props;
  return (
    <View style={[styles.searchContainer]}>
      <TextInput
        style={styles.searchContainerInput}
        placeholder={placeholder}
      />
    </View>
  )
};

export const Search = (props) => {
  const {placeholder} = props;
  return (
    <View style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      paddingTop: 10,
      paddingBottom: 10,
    }}>
      <TextInput
        style={{
          width: '100%',
          height: 45,
          backgroundColor: 'white',
          borderColor: colors.borderColorLight,
          borderWidth: 1,
          borderRadius: 3,
          paddingLeft: 20,
          paddingRight: 20
        }}
        placeholder={placeholder}
      />
    </View>
  )
};

export const Hero = (props) => {
  const {name, location, imageUrl, onPress} = props;
  return (
    <View style={{
      height: 120,
      backgroundColor: colors.brand,
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 10,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20
    }}>
      <View style={{flex: 0.8}}>
        <Text style={{fontSize: 24, color: '#FFF', fontWeight: 'bold'}}>{strings.home.heading}</Text>
        <Text style={{fontSize: 14, color: colors.textLight2}}>You are in HSR Layout, Bengaluru</Text>
      </View>
      <View style={{flex: 0.2}}>
        <TouchableHighlight onPress={onPress}>
          <Image
            style={{width: 60, height: 60, borderRadius: 30}}
            source={{uri: imageUrl}}
          />
        </TouchableHighlight>
      </View>
    </View>
  )
};

export const StoryIcon = (props) => {
  const {name, imageUrl, onPress} = props;
  return (
    <TouchableHighlight onPress={onPress} style={{marginRight: 10}}>
      <Image
        style={{width: 60, height: 60, borderRadius: 30}}
        source={{uri: imageUrl}}
      />
    </TouchableHighlight>
  )
};

export const FeedItem = (props) => {
  const {name, imageUrl, content, onPress} = props;
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={{backgroundColor: '#FFF', paddingTop: 20, paddingLeft: 20, paddingRight: 20}}>
        <View style={{diplay: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
          <View style={{diplay: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
            <Image style={{width: 40, height: 40, borderRadius: 20, marginRight: 10}} source={{uri: imageUrl}}/>
            <Text style={[styles.h6, {fontWeight: 'bold'}]}>{name}</Text>
          </View>
          <IconButton
            name="ios-close-circle"
            color={colors.iconLightColor}
            size={30}
          />
        </View>
        <View style={{paddingBottom: 20, borderBottomWidth: 1, borderColor: colors.borderColorLight}}>
          <Text style={styles.p}>{content}</Text>
        </View>

      </View>
    </TouchableHighlight>
  )
};