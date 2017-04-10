/**
 * Created by kimch on 2017-04-07.
 */

import React from 'react';
import Radium from 'radium';

@Radium
class BeerLoader extends React.Component {
    state = {};

    render() {
        const mugColor = '#EEF5F8';
        const beerColor = '#FFD36D';
        const backgroundColor = this.props.backgroundColor;
        const bubbleColor = '#ffc849'; // darken(#FFD36D, 7%)

        const size = this.props.size;
        const mugHeight = size * 32 / 47;
        const mugHeightRatio = mugHeight / 32;
        const mugWidth = 20 * mugHeightRatio;

        const logoLeft = (size - mugWidth) / 2;
        const logoTop = size * 15 / 47;

        const styles = {
            positionAbsolute: {position: 'absolute'},
            whiteBackground: {backgroundColor: '#FFFFFF'},
            circle: {borderRadius: '100%'},

            container: {
                position: 'relative',
                display: 'inline-block',
                width: size,
                height: size,
            },
            loaderWrapper: {
                position: 'absolute',
                top: logoTop,
                left: logoLeft,
            },
            mug: {
                container: {
                    position: 'relative',
                    width: mugWidth,
                    height: mugHeight,
                },
                content: {
                    backgroundColor: mugColor,
                    height: '100%',
                    width: '100%',
                    borderRadius: 2 * mugHeightRatio,
                    position: 'relative'
                },
                ':before': {
                    position: 'absolute',
                    content: '',

                    left: 12 * mugHeightRatio,
                    top: 6 * mugHeightRatio,
                    width: 15 * mugHeightRatio,
                    height: 17 * mugHeightRatio,
                    borderRadius: '19%',
                    backgroundColor: mugColor
                },
                ':after': {
                    position: 'absolute',
                    content: '',
                    width: 12 * mugHeightRatio,
                    height: 13 * mugHeightRatio,
                    top: 8 * mugHeightRatio,
                    left: 13 * mugHeightRatio,
                    backgroundColor: backgroundColor,
                    borderRadius: '19%'
                }
            },
            beer: {
                container: {
                    top: 2 * mugHeightRatio,
                    left: 2 * mugHeightRatio,
                    width: 16 * mugHeightRatio,
                    height: 28 * mugHeightRatio
                },
                content: {
                    backgroundColor: beerColor,
                    height: '100%',
                    width: '100%',
                    borderRadius: 1 * mugHeightRatio,
                    position: 'relative'
                },
                ':before': {
                    position: 'absolute',
                    backgroundColor: bubbleColor,
                    borderRadius: '100%',

                    animation: '2s up infinite',
                    width: 2 * mugHeightRatio,
                    height: 2 * mugHeightRatio,
                    bottom: 2 * mugHeightRatio,
                    left: 5 * mugHeightRatio,
                    boxShadow: `${7 * mugHeightRatio}px ${-15 * mugHeightRatio}px 0 ${bubbleColor}, ${4 * mugHeightRatio}px ${-10 * mugHeightRatio}px 0 ${bubbleColor}, ${6 * mugHeightRatio}px ${-3 * mugHeightRatio}px 0 ${bubbleColor}`
                },
                ':after': {
                    position: 'absolute',
                    backgroundColor: bubbleColor,
                    borderRadius: '100%',

                    animation: '2s up infinite',
                    width: 1.5 * mugHeightRatio,
                    height: 1.5 * mugHeightRatio,
                    bottom: 6 * mugHeightRatio,
                    left: 7 * mugHeightRatio,
                    boxShadow: `${-3 * mugHeightRatio}px ${-8 * mugHeightRatio}px 0 ${bubbleColor}, ${7 * mugHeightRatio}px ${-5 * mugHeightRatio}px 0 ${bubbleColor}`


                },
            },
            bubble: {
                base: {
                    width: 10 * mugHeightRatio,
                    height: 10 * mugHeightRatio,
                    top: -5 * mugHeightRatio,
                    left: -3 * mugHeightRatio,
                },
                ':before': {
                    position: 'absolute',
                    content: '',
                    backgroundColor: '#FFF',
                    borderRadius: '100%',

                    width: 12 * mugHeightRatio,
                    height: 12 * mugHeightRatio,
                    left: 5 * mugHeightRatio,
                    top: -2 * mugHeightRatio
                },
                ':after': {
                    position: 'absolute',
                    content: '',
                    backgroundColor: '#FFF',
                    borderRadius: '100%',

                    width: 10 * mugHeightRatio,
                    height: 10 * mugHeightRatio,
                    left: 14 * mugHeightRatio,
                    top: 0
                }
            },
            smallBubbles: {
                base: {
                    width: 5 * mugHeightRatio,
                    height: 5 * mugHeightRatio,
                    top: -7 * mugHeightRatio,
                    left: 11 * mugHeightRatio,
                },
                ':before': {
                    position: 'absolute',
                    content: '',
                    borderRadius: '100%',
                    backgroundColor: '#FFF',

                    width: 3 * mugHeightRatio,
                    height: 3 * mugHeightRatio,
                    top: -6 * mugHeightRatio,
                    left: -3 * mugHeightRatio,
                },
                ':after': {
                    position: 'absolute',
                    content: '',
                    borderRadius: '100%',
                    backgroundColor: '#FFF',

                    width: 3 * mugHeightRatio,
                    height: 3 * mugHeightRatio,
                    top: -8 * mugHeightRatio,
                    left: -8 * mugHeightRatio,
                }
            },
            drip: {
                width: 5 * mugHeightRatio,
                height: 14 * mugHeightRatio,
                top: 1 * mugHeightRatio,
                left: -2 * mugHeightRatio,
                borderRadius: 5 * mugHeightRatio / 2,
                boxShadow: `${4 * mugHeightRatio}px ${-6 * mugHeightRatio}px 0 white`,
                animation: '3s drip infinite'
            }
        };

        return <div style={[styles.container, {backgroundColor}, this.props.style]}>
            <div style={styles.loaderWrapper}>
                <div className="mug:container" style={[styles.mug.container]}>
                    <div className="mug:before" style={styles.mug[':before']}/>
                    <div className="mug:after" style={styles.mug[':after']}/>
                    <div className="mug:content" style={styles.mug.content}/>
                    <div className="beer" style={[styles.positionAbsolute, styles.beer.container]}>
                        <div className="beer:content" style={styles.beer.content}/>
                        <div className="beer:before" style={styles.beer[':before']}/>
                        <div className="beer:after" style={styles.beer[':after']}/>
                    </div>
                </div>
                <div className="bubble" style={[styles.positionAbsolute, styles.whiteBackground, styles.circle, styles.bubble.base]}>
                    <div className="bubble:before" style={styles.bubble[':before']}/>
                    <div className="bubble:after" style={styles.bubble[':after']}/>
                </div>
                <div className="small-bubbles" style={[styles.positionAbsolute, styles.whiteBackground, styles.circle, styles.smallBubbles.base]}>
                    <div className="small-bubbles:before" style={styles.smallBubbles[':before']}/>
                    <div className="small-bubbles:after" style={styles.smallBubbles[':after']}/>
                </div>
                <div className="drip" style={[styles.positionAbsolute, styles.whiteBackground, styles.drip]}></div>
                <style>
                    {`
                    @keyframes up {0% {transform: translateY(0px);} 99% {transform: translateY(-70px);} 100% {opacity: 0.5;}}
                    @keyframes drip {0% {transform: translateY(0px);} 100% {height: ${25 * mugHeightRatio}px;}}
                `}
                </style>
            </div>
        </div>;
    }


    static defaultProps = {
        backgroundColor: '#7DCFB6',
        style: undefined,
        size: 300
    };

    static propTypes = {
        backgroundColor: React.PropTypes.string,
        style: React.PropTypes.object,
        size: React.PropTypes.number
    };
}

export default BeerLoader;