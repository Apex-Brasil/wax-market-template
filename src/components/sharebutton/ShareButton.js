import SharePopup from "../popups/SharePopup";
import React, {useState} from "react";
import cn from "classnames";


function ShareButton(props) {
    const link = props['link'];
    const type = props['type'];

    const [showPopup, setShowPopup] = useState(false);

    const share = async (show) => {
        setShowPopup(show);
    };

    return type === 'asset' ? (
        <div>
            <div
                className={cn(
                    'flex w-16 h-4 m-auto justify-start items-center',
                    'text-xs text-white font-bold cursor-pointer',
                    'rounded outline-none',
                    'transition-width duration-250',
                )}
                onClick={() => share(true)}
            >
                <div className="mr-1"><img src="/share-outline.svg" alt="share" className="w-4 h-4" /></div>
                <div>Share</div>
            </div>
            {showPopup ? <SharePopup link={link} callBack={share}/> : '' }
        </div>) : (<div>
            <div
                className={cn(
                    'absolute w-5 h-5 mt-1 ml-0 opacity-70',
                    'hover:font-bold hover:opacity-100 hover:cursor-pointer'
                )}
                onClick={() => share(true)}
            >
                <div><img src="/share-outline.svg" alt="share"/></div>
            </div>
            {showPopup ? <SharePopup link={link} callBack={share}/> : '' }
        </div>
    );
}

export default ShareButton;
