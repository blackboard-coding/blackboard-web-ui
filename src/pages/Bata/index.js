import React, { Fragment } from 'react';
import MobileStoreButton from 'react-mobile-store-button';
import Icon from './imgs/Logo2_white.png'
import Background from './imgs/BG_Header.png'
function BataPage() {
    const iOSUrl = '';
    const androidUrl = 'https://play.google.com/store/apps/details?id=com.blackboard.th.android';
    return (
        <div style={{
            backgroundImage: `url("${Background}")`,
            height: (window.innerHeight),
            width: "-webkit-fill-available",
            backgroundSize: "cover"
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '-webkit-fill-available',
            }}>

                <div style={{
                    display: "grid"
                }}>
                    <div style={{
                        margin: "50px"
                    }}>
                        <img style={{
                            paddingLeft: 15,
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
    )
}

export default BataPage;