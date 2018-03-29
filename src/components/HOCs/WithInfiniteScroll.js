import Waypoint from 'react-waypoint';
import React, { Component } from 'react';

const withInfiniteScroll = (Child) =>
    class WithInfiniteScroll extends Component {
        onReachTop() {
            this.props.onReachTop();
            if (this.refs.ancestor) {
                this.refs.ancestor.scrollTop += 30;
            }
        }
        onReachBottom() {
      //      if (this.props.)
                this.props.onReachBottom();
            if (this.refs.ancestor) {
                this.refs.ancestor.scrollTop -= 30;
            }
        }
        componentDidMount() {
            const elem = this.refs.ancestor;
            console.log(elem);
            if (elem) {
                elem.scrollTop = elem.scrollHeight;
                console.log(this.props.messages.length);
            }
        }
        render() {
            //     let topInterval, bottomInterval;
            return (
                <div className="chatContainer" ref="ancestor" style={{ overflow: "auto", height: "400px" }}>
                    <Waypoint
                        fireOnRapidScroll={true}
                        //    topOffset="-150px"
                        onEnter={() => {
                            console.log('entered ');
                            //       if (topInterval) return;
                            //      topInterval = setInterval(()=>{this.onReachTop();},2000);
                            this.onReachTop();
                        }}
                        onLeave={() => {
                            console.log('has left');
                            //      clearInterval(topInterval);
                            //      topInterval = null;
                        }}
                    ></Waypoint>
                    <Child {...this.props} />
                    <Waypoint
                        fireOnRapidScroll={true}
                        //      bottomOffset="-150px"
                        onEnter={({ waypointTop }) => {
                            console.log('entered ' + waypointTop);

                            this.onReachBottom();
                        }}
                        onLeave={() => { console.log('has left'); }}
                    ></Waypoint>
                </div>
            );
        }
    }


export default withInfiniteScroll;