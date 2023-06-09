import LeftSide from "@/components/leftSide";
import RightSide from "@/components/rightSide";

export default function CourseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="container w-full max-w-[1204px] mx-auto">
                <div className="flex gap-4 mt-8">
                    <div className="w-full max-w-[345px]">
                        <LeftSide />
                    </div>
                    <div className="w-full">{children}</div>
                    <div className="w-full max-w-[260px]">
                        <RightSide />
                    </div>
                </div>
            </div>
        </div>
    )
}