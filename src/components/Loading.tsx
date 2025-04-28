import Logo from "@/assets/logo";


// Loading fallback
export const PageLoading = () => (
    <div className="min-h-screen max-w-full w-full h-full fixed inset-0 flex items-center justify-center bg-background">
        <div className="w-full h-full flex flex-col items-center gap-4 md:gap-8 lg:gap-12  bg-background">
            <div className="h-60 w-60">
                <Logo className="w-full h-full" />
            </div>

            <div className="relative h-16 w-16">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="loader"></div>
                    {/* <div className="h-12 w-12 rounded-full border-4 border-german-red border-t-transparent animate-spin"></div> */}
                </div>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl  font-heading font-bold -mt-3 "><span className="text-german-black">Deutsches&nbsp;</span><span className=" text-german-red">Haus&nbsp;</span><span className="text-german-gold"> Jaounde</span></h2>
        </div>
    </div>
);