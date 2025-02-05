import React from 'react'
import { JitsiMeeting } from '@jitsi/react-sdk';

const JitsiComponente = () => {
    return (
        <>
            {/* <div> */}
            <JitsiMeeting

                roomName="PleaseUseAGoodRoomName"
                configOverwrite={{
                    startWithAudioMuted: true,
                    disableModeratorIndicator: true,
                    startScreenSharing: true,
                    enableEmailInStats: false
                }}
                interfaceConfigOverwrite={{
                    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
                }}
                userInfo={{
                    displayName: 'ANDERSON'
                }}
                onApiReady={(externalApi) => {
                    // here you can attach custom event listeners to the Jitsi Meet External API
                    // you can also store it locally to execute commands
                }}
                getIFrameRef={(iframeRef) => { iframeRef.style.height = '600px'; iframeRef.style.width = '600px'; }}
            />
            {/* </div> */}
        </>
    )
}

export default JitsiComponente;