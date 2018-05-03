import * as React from 'react';
import './App.less';
import Avatar, { InterfaceURL } from "./components/Avatar";
import Calculator from './components/Calculator';
import Clock, { InterfaceDate } from './components/Clock';
import Combination from './components/Combination';
import Greeting, { InterfacePerson } from './components/Greeting';
import HelloWorld, { InterfaceName } from './components/HelloWorld';
import JSX, { InterfaceNames } from './components/JSX';
import Label, { InterfaceVal } from './components/Label';
import List, { InterfaceNumArr } from './components/List';
import LogState, { InterfaceLog } from './components/LogState';
import Mailbox, { InterfaceMessageArr } from './components/Mailbox';
import SignUpDialog from './components/SignUpDialog';
import SplitPane, { Dashboard, InterfacePane } from './components/SplitPane';
import StateIncrease from './components/StateIncrease';
import StopRender, { InterfaceProps } from './components/StopRender';
import Toggle, { InterfaceToggle } from './components/Toggle';
import UserGreeting from './components/UserGreeting';
import Welcome, { InterfacePeople } from './components/Welcome';
import WelcomeAll, { InterfaceArr } from './components/WelcomeAll';
import WelcomeDialog from './components/WelcomeDialog';

class App extends React.Component {
  public state = {
      isLoggedIn: true
  };
  public toggleState = () => {
      this.setState(Object.assign({}, {
          isLoggedIn: !this.state.isLoggedIn
      }));
  };
  public render() {
    const name: InterfaceName = {
        name: 'robin'
    };
    const user: InterfaceNames = {
        firstName: 'robin',
        lastName: 'zhu'
    };
    const person: InterfacePerson = {
        name: 'Andy'
    };
    const avatarURL: InterfaceURL = {
        url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4137607623,2966486105&fm=173&app=25&f=JPEG?w=218&h=146&s=162066A120090AEE34947F3C030030D0'
    };
    const People: InterfacePeople = {
        name: 'An'
    };
    const nameArr: InterfaceArr[] = [{
            name: '张三'
        },{
            name: '李四'
        },{
            name: '王五'
        }
    ];
    const date: InterfaceDate = {
        date: new Date()
    };
    const toggle: InterfaceToggle = {
        isToggleOn: true
    };
    const msgArr: InterfaceMessageArr = {
        messages: ['message1', 'message2', 'message3']
    };
    const log: InterfaceLog = {
        isLoggedIn: true
    };
    const show: InterfaceProps = {
        warn: true
    };
    const list:InterfaceNumArr = {
        numArr: [1, 2, 3, 4, 5]
    };
    const defaultVal: InterfaceVal = {
        defaultValue: '安然 robin',
        type: 'input'
    };  
    const defaultVal1: InterfaceVal = {
        defaultValue: '安然 robin',
        type: 'textarea'
    };
    const defaultVal2: InterfaceVal = {
        defaultValue: '安然 robin',
        type: 'file'
    }; 
    const defaultVal3: InterfaceVal = {
        defaultValue: '安然 robin',
        selected: 1,
        type: 'select'
    };
    const defaultVal4: InterfaceVal = {
        isGoing: true,
        numberOfGuests: 2,
        type: 'checkbox'
    };
    const dashboard: InterfacePane = {
        left: <Dashboard.Contacts />,
        right: <Dashboard.Chat />
    };
    return (
      <div className="App">
          <HelloWorld {...name}/>
          <JSX {...user}/>
          <Greeting {...person}/>
          <Greeting/>
          <Avatar {...avatarURL}/>
          <Avatar/>
          <Welcome {...People}/>
          <WelcomeAll nameArr={nameArr}/>
          <Clock {...date}/>
          <Toggle {...toggle}/>
          <UserGreeting {...this.state}/>
          <button className='button' onClick={this.toggleState}>{this.state.isLoggedIn ? '登出': '登入'}</button>
          <Mailbox {...msgArr}/>
          <LogState {...log}/>
          <StopRender {...show}/>
          <StopRender />
          <List {...list}/>
          <Label {...defaultVal} />
          <Label {...defaultVal1}/>
          <Label {...defaultVal2} />
          <Label {...defaultVal3} />
          <Label {...defaultVal4} />
          <StateIncrease/>
          <Calculator/>
          <Combination>
             <h3>我是组件Combination的children</h3>
          </Combination>
          <SplitPane {...dashboard}/>
          <WelcomeDialog/>
          <SignUpDialog/>
      </div>
    );
  }
}

export default App;
