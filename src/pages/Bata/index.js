import React, { Fragment } from 'react';
import MobileStoreButton from 'react-mobile-store-button';
import Icon from './imgs/Logo2_white.png'
import Background from './imgs/BG_Header.png'
import { width } from '@material-ui/system';
function BataPage() {
    const iOSUrl = '';
    const androidUrl = 'https://play.google.com/store/apps/details?id=com.blackboard.th.android';
    return (
        <Fragment>
            <div style={{
                backgroundImage: `url("${Background}")`,
                height: (window.innerHeight),
                width: (window.innerWidth),
                backgroundSize: "cover"
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: (window.innerHeight),
                }}>

                    <div style={{
                        display: "grid",
                        width: (window.innerWidth - 10)
                    }}>
                        <div style={{
                            margin: "50px 0px",
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <img style={{
                                width: 330

                            }} src={Icon} />
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <MobileStoreButton
                                height={75}
                                width={200}
                                store="ios"
                                url={iOSUrl}
                                linkProps={{ title: 'App Store Button' }}
                            />
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <MobileStoreButton
                                width={230}
                                height={100}
                                store="android"
                                url={androidUrl}
                                linkProps={{ title: 'Play Store Button' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <footer style={{
                backgroundColor: '#000000',
                height: '75px',



            }}>

            </footer>
        </Fragment >
    )
}

export default BataPage;