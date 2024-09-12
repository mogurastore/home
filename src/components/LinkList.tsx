import { BsBadgeVr } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import {
  PiPen,
  PiTwitchLogoBold,
  PiXLogoBold,
  PiYoutubeLogoBold,
} from "react-icons/pi";
import { SiNiconico } from "react-icons/si";

function LinkList() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="grid grid-cols-5 gap-4 text-4xl justify-items-center">
        <a href="https://x.com/MoguraStore" target="_blank" rel="noreferrer">
          <PiXLogoBold />
        </a>
        <a
          href="https://vrchat.com/home/user/usr_692886eb-590f-4329-bfcb-f0d75b76a3d6"
          target="_blank"
          rel="noreferrer"
        >
          <BsBadgeVr />
        </a>
        <div>
          <a href="https://mogura.dev" target="_blank" rel="noreferrer">
            <PiPen />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/mogurastore"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.twitch.tv/mogurastore"
            target="_blank"
            rel="noreferrer"
          >
            <PiTwitchLogoBold />
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/@MoguraStore"
            target="_blank"
            rel="noreferrer"
          >
            <PiYoutubeLogoBold />
          </a>
        </div>
        <div>
          <a
            href="https://www.nicovideo.jp/user/1020273/video"
            target="_blank"
            rel="noreferrer"
          >
            <SiNiconico />
          </a>
        </div>
        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0AELD17Yqv2iK2Ljb5HOSO7aTK7cWLHobMy0ZkdoU-XjPrg/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <CiMail />
          </a>
        </div>
      </div>
    </div>
  );
}

export { LinkList };
