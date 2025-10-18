// TODO: include picture of cookie monster bag

import { useNavigate } from "react-router-dom";

export default function NYC() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-background text-foreground px-6 md:px-16 py-20 max-w-3xl mx-auto">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 text-sm text-blue-500 hover:text-blue-700"
            >
                ← Back
            </button>

            <h1 className="text-3xl font-semibold mb-6">My experience in NYC</h1>
            <p className="text-sm text-muted-foreground mb-10">Oct 18, 2025</p>

            {/* First paragraph */}
            <p className="leading-relaxed text-base md:text-sm text-black mb-6">
                I put together short stories (unconventional) that highlight some of my experiences in the city.
                I don't think I'd be able to truly capture my entire experience in one story and I'm not trying to write a book.
            </p>

            {/* Second paragraph */}
            <p className="leading-relaxed text-base md:text-lg text-black mb-6">
                I met Stephanie after my first spontaneous adventure in NYC. We talked about how it was my first time living out there and she suggested a few spots, that I don’t think I ever went to. They were touristy and I'm sure very crowded. I was more into discovering the little nooks of NYC: hidden jazz bars, random food spots, tiny and expensive thrift stores. All that. She also told me about Coney Island. In my head, Coney Island is what New Yorkers would call a deli. 
                I think now I stopped hearing her. We got to our destination and I was overwhelmed by the menu. I didn’t own any glasses. She already knew what she needed to get. I couldn’t see what to get. 
                After she let me know the price and paid, we said our goodbyes and I never saw her again. After a few weeks, I eventually find out Coney Island is an amusement park. 
            </p>

            <p className="leading-relaxed text-base md:text-lg text-black mb-6">
                I got in Friday night. I was really excited and got up to leave the apartment at 8am the next day. A few minutes in, it reminded me of Lagos. Everyone seemed so busy and they moved fast. Someone complimented my Cookie Monster bag. It was my first time carrying it out. 
                That’s when I knew I didn’t want to leave this place. After about 55 blocks, I finally got to the famous Central Park and saw there were bikes nearby. After my time in Chicago and Arkansas, e-bikes were (link to the story on why I’ll never bike in Manhattan again) a must. The park was huge and crowded. After biking around the park and now looking for something to eat, a woman comes to me with a request. This was my first interaction with someone local. We walked together and talked. It was a beautiful conversation.
            </p>

        </div>
    );
}
