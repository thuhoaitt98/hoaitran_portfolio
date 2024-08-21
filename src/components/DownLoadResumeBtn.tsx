import React from "react";
import HackerBtn from "./HackerBtn";

function DownLoadResumeBtn() {
    return (
        <div className="h-fit w-full mt-2 py-2 px-4">
            {/* <Link href="/" className={cn(buttonVariants({ variant: "default", size:"lg"}))}>
      <Download className="mx-1" />
      Download Resume
    </Link> */}
            <HackerBtn label="Download Resume" />
        </div>
    );
}

export default DownLoadResumeBtn;
