import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, FileText } from "lucide-react"


const Backroom = () => {
    const navigate = useNavigate()

    const backroomItems = [
        {
            title: "Secret Projects",
            description: "Experimental work and side projects",
            icon: FileText,
            action: () => console.log("Loading secret projects...")
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-brown-dark via-brown-medium to-brown-light">
            <div className="min-h-screen bg-black/20 backdrop-blur-sm">
                <header className="p-6">
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/')}
                        className="text-brown-cream hover:text-white hover:bg-brown-medium/20"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2"/>
                        Back to Surface
                    </Button>
                </header>

                <div className="container mx-auto px-6 py-12">
                    <div className="text-center mb-16">
                        <h1 className="text-4x1 md:text-6xl font-bold text-brown-cream mb-4">
                            Welcome to Desola's Backroom
                        </h1>
                        <p className="text-xl text-brown-cream/80 max-w-2xl mx-auto">
                            This is Desola's backroom which stores everything she loves
                        </p>
                    </div>
                    {/* backroom items */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {backroomItems.map((item, index)=> (
                            <Card
                                key={index}
                                className="bg-brown-cream/10 border-brown-light/30 hover:bg-brown-cream/20 transition-all duration-300 cursor-pointer backdrop-blur-md"
                                onClick={item.action}
                            >
                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4 p-3 bg-brown-medium/20 rounded-full w-fit">
                                        <item.icon className="h-8 w-8 text-brown-cream"/>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <Button
                                        variant="outline"
                                        className="border-brown-light/50 text-brown-cream hover:bg-brown-medium/20"
                                    >
                                        Enter
                                    </Button>

                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* secret message */}
                    <div className="mt-16 text-center">
                        <Card className="bg-brown-cream/5 border-brown-light/20 max-w-md mx-auto backdrop-blur-md">
                            <CardHeader>
                                <CardTitle className="text-brown-cream text-sm">Developer's Note</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-brown-cream/80 text-sm italic">
                                    "Every great developer needs a place to experiment, to break things, and to build the impossible.
                                    This is mine."
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                {/* ambient stuff */}
                <div className="fixed top-20 left-10 w-2 h-2 bg-brown-cream/30 rounded-full animate-pulse"></div>
            
            </div>
        </div>
    )

}


export default Backroom