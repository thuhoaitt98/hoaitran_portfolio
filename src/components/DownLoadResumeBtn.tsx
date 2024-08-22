import React from "react";
import HackerBtn from "./HackerBtn";

function DownLoadResumeBtn() {
    return (
        <div className="mt-2 h-fit w-full px-4 py-2">
            {/* <Link href="/" className={cn(buttonVariants({ variant: "default", size:"lg"}))}>
      <Download className="mx-1" />
      Download Resume
    </Link> */}
            <HackerBtn label="Download Resume" />
        </div>
    );
}

export default DownLoadResumeBtn;
