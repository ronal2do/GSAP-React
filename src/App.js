import React, { Component } from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax } from 'gsap';

const styles = {
  app: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#27283B',
  },
  parrot: {
    position: 'relative',
    // left: 200,
    // top: 200,
    width: 0,
    height: 0,
    cursor: 'pointer'
  },
  big: {
    transform: 'translate(-50%, -50%) rotate(45deg)',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: '#D72928',
    borderLeftColor: '#DB3E3D',
    borderWidth: 100,
    borderStyle: 'solid'
  },
  middle: {
    transform: 'translate(-50%, -50%) rotate(45deg)',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
    borderRightColor: 'transparent',
    borderTopColor: '#F8D245',
    borderBottomColor: '#F2F2F2',
    borderLeftColor: '#FFFFFF',
    borderWidth: 80,
    borderStyle: 'solid'
  },
  small: {
    transform: 'translate(-50%, -50%) rotate(45deg)',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
    borderRightColor: '#F7A703',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderWidth: 40,
    borderStyle: 'solid'
  },
  last: {
    position: 'absolute',
    top: -80,
    left: -40,
    fontSize: '90px',
    color: '#000',
  }
}

function hoverAnim({target}) {
 const duration = 0.5
 return new TimelineMax()
   .pause()
   .add('red')
   .to(target.find({name: 'big'}), duration, {
     rotation: '+=180',
     borderBottomColor: '#2ECC40',
     borderLeftColor: '#3D9970',
   }, 'red')
   .to(target.find({name: 'middle'}), duration, {
     rotation: '-=180',
     borderRightColor: '#F8D245',
     borderTopColor: 'transparent',
   }, 'red')
   .to(target.find({name: 'small'}), duration, {rotation: '+=90'}, 'red')
   .to(target.find({name: 'last'}), duration / 4, {scaleY: 0}, 'red')
   .set(target.find({name: 'last'}), {left: 12})
   .to(target.find({name: 'last'}), duration / 4, {scaleY: 1})
   .add('green')
};

class App extends Component {
  componentDidMount() {
    this.hoverAnim = this.addAnimation(hoverAnim)
  }

  render() {
     return (
       <div style={styles.app}>
         <div name='parrot' style={styles.parrot}
           onMouseEnter={ () => this.hoverAnim.tweenTo('green') }
           onMouseLeave={ () => this.hoverAnim.tweenTo('red') }>

           <div name='big' style={styles.big}/>
           <div name='middle' style={styles.middle}/>
           <div name='small' style={styles.small}/>
           <div name='last' style={styles.last}>
             •
           </div>
         </div>
       </div>
      )
   }
}

export default GSAP()(App);
