import React, { Fragment } from 'react';
import { StoreButton } from '@blackboard/components';
import Icon from './imgs/Logo2_white.png'
import Background from './imgs/BG_Header.png'
import { width } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function BataPage() {
    const iOSUrl = '';
    const androidUrl = 'https://play.google.com/store/apps/details?id=com.blackboard.th.android';
    const [open, setOpen] = React.useState({
        terms_of_service: false,
        privacy_policy: false

    });
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen({ ...open, [scrollType]: true });
        //   setScroll(scrollType);
    };

    const handleClose = (scrollType) => () => {
        setOpen({ ...open, [scrollType]: false });
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    // const history = useH
    return (
        <Fragment>
            <div style={{
                backgroundImage: `url("${Background}")`,
                height: (window.innerHeight),
                width: (window.innerWidth),
                backgroundSize: "contain"
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
                                width: window.innerWidth - 100

                            }} src={Icon} />
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <StoreButton
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
                            <StoreButton
                                height={75}
                                width={200}
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
                // display: 'flex',
                // justifyContent: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '-webkit-fill-available',
                    backgroundColor: '#000000',
                }}>


                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '-webkit-fill-available',
                    }}>
                        <div style={{
                            margin: 5
                        }}>
                            <a style={{
                                color: 'white',
                                fontSize: 'small'
                            }}
                                onClick={handleClickOpen('terms_of_service')} >เงื่อนไขการใช้บริการ</a>
                        </div>
                        <div style={{
                            margin: 5
                        }}>
                            <a style={{
                                color: 'white',
                                fontSize: 'small'
                            }}
                                onClick={handleClickOpen('privacy_policy')}>นโยบายความเป็นส่วนตัว</a>
                        </div>
                    </div>
                </div>
                <div style={{
                    backgroundColor: '#000000',
                    // height: '75px',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <p style={{
                        fontSize: "0.7em",
                        color: "#979797",
                        letterSpacing: ".1em"
                    }}>© 2020 Blackboard-TH, by iceberg.co.ltd</p>
                </div>

            </footer>
            <Dialog
                open={open.terms_of_service}
                onClose={handleClose('terms_of_service')}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">เงื่อนไขการใช้บริการ</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <iframe style={{
                            height: window.innerHeight - 100,
                            width: '-webkit-fill-available',
                            border: '0px solid',
                            borderRadius: '6px',
                        }} src="https://policy.blackboard-th.com/business">
                        </iframe>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose('terms_of_service')} color="primary">
                        ปิด
          </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={open.privacy_policy}
                onClose={handleClose('privacy_policy')}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">นโยบายความเป็นส่วนตัว</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <iframe style={{
                            height: window.innerHeight - 100,
                            width: '-webkit-fill-available',
                            border: '0px solid',
                            borderRadius: '6px',
                        }} src="https://policy.blackboard-th.com/private">
                        </iframe>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose('privacy_policy')} color="primary">
                        ปิด
          </Button>
                </DialogActions>
            </Dialog>
        </Fragment >
    )
}

export default BataPage;