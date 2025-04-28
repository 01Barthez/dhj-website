import Logo from "@/assets/logo";


// Loading fallback
export const PageLoading = () => (
    <div className="max-w-full w-full h-screen fixed inset-0 flex flex-col items-center justify-center gap-4 md:gap-8 lg:gap-10 bg-background z-[100]">
            <div className="h-60 w-60">
                <Logo className="w-full h-full" />
            </div>

            <div className="relative h-16 w-16">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="loader"></div>
                </div>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl  font-heading font-bold"><span className="text-german-black">Deutsches&nbsp;</span><span className=" text-german-red">Haus&nbsp;</span><span className="text-german-gold"> Jaounde</span></h2>
    </div>
);