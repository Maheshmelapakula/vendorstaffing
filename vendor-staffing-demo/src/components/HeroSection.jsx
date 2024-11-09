import React from 'react';
import Slider from 'react-slick';

function HeroSection() {
  const settings = {
    dots: true,             // Show dots for navigation
    infinite: true,         // Infinite scrolling
    speed: 500,             // Transition speed
    slidesToShow: 1,        // Show 1 slide at a time
    slidesToScroll: 1,      // Scroll 1 slide at a time
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 3000,    // Autoplay speed (3 seconds)
  };

  const slides = [
    {
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUTExMVFhUXGBYVFRgXFhgXFxoWFRgXFhYVFhcYHSggGBolHRUXITElJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0fICYtKy0rLS8tLS8tLS0tNystLS0tLystLS0tLSstLS0uLS0tLS0tLS0tLS0tLSstLSstLf/AABEIAKQBMgMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAUGAgMHAf/EAEIQAAECAwMHCQQIBwEBAQAAAAEAAgMEEQUhMQYSQVFxgbETIjIzYXKRocE0c7LRFCNCUoKSwvAHJEN0g6LhU2IV/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQCAwUBBv/EAC8RAAICAQMDAwMCBgMAAAAAAAABAhEDBCExEjJBM3GBEyJhUfBCQ5GxwdEUI1L/2gAMAwEAAhEDEQA/APV0RFnjJjf4kw/q4LtTnDxAP6Vg16N/EOHWWadUVvm1w+Sx8hk/GiXuGY3W7Hc3Hxomsc4xhbZTKLctipU+RsiNGva2jfvOuG7XuWqkLCgwr6Z7tbr/AAGAVkqZ6vxFFsNP/wCikk8moTRV5L3eDfDTvU4yVOjSmrBTUSc5yn3MZjFR4K7nMNbwdYu81ZyluObc8Zw1i4/IriV1PlmnRTYoptcEnT5NDKzjIvRdXswPgkechs6TwOzT4C9Zd0q4YH0K6HMIxCs+qyH0kX0e3mDoNJ23D5qEbci1rzQNVLvmqxWMtY0V4qaN1Z2Pgo9UpcEumMeSfL2809NpHaLx81awYzXjOaahZuPYsVorc7saTXwIXyyZ7kXUd0T0uw61JTadSIShFq4moRAUVxSEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAfHtBFCqCKzNJB0Gi0CrbVg4OGw+iryK1ZPG6ZXIiKkuCIiACIiAC+O0BfUQdPsA5hzmgA66BTW2k/SAfJQV9XVJrgi0nyWbLUGlp3Gq+ujQHmrgK//TfVVSKX1Gc6EaIdmC+qpkZzN5rujo7P+K2BVsZWUyjQREUjgREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAXGLDDgQdK5IgDPPbQkHEXLip9qwqODteO0KAlpKnQwnaCIi4dCIiACAIiDoQMFb67iQuEZxAqBWmOxfYcQOFQgCwgSUF+Dng6s69c49m0HMNew4+KrwVNl7QIudePP/AKppxfJW1LwQ3NINCKFTbNmSDmHA4dh1LumoYitDm3kfuiqnVGGOjajtZ3uRo0UazprlWA6Rc4doUlXJ2UNUERF0AiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgDpm4WewjTiNoVGtEqy0ZSnObhpGrtVeSPkshLwV6IucNtSAdJAVJadsCTc+8XDWV3mzHfeHmrQCiK5Y0UvIyijy7mYjfoXStDFhhwIOB/dVQxoZaSDoUJxosjKzukH5rx23eP/aKXNWUxxzm8x2sYHaFWA0WghvqAdYqu46apkZ2naKOLLPZ0hvF4/5vXUtGqu0ZXN5zRdpGrtRKFbo7Gd8n2yYt5brvG0KZMSjX3m46wqaDEzXA6ir8Gt6lDdUyM9naOqWlhDrSt+K7kRTSorbsIiLoBERABERABERABERABERABERABERABERABERABERABERABERAFRPymYajonyOpRFoXNBFDgqWcluTPYcPkqZxrdF0JXsyykY+e2/EXH5qSqazolHgaDd8lcqcHaK5qmFW2vSrdd/grJU9pvq+moAevqjJwdhyRVey0PNaAcQFW2bBznVODb9+hW6jjXk7kfgL49tQQdNy+orSsz8WGWkg6FY2PM57CDcWmm7R++xSZmVa/HHWF1ykkIZJBJJFDoVai0yxyTRKREVhWEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEXRNTjIfSN+rE+C6oFqQnmgND2inmpKEmroreWCdN7kxERRLAotpQ6sPZf81KXxzagjXcuNWjqdMzv0gQ+e7Bt53aFSzmU0w81a7k26A0DzJFSrrKSRzZYkXnOaXd2vzosWlZuUdjW0mKE49TVmnsXKd+eGRiHNJpnUAIJwrS4hToj6vpQlzjgMViqVuXp8pKNZfTnEDOPbQVp2KULnsyrWQhjacVycpSDmNA04nau5ETKVGa3YRF0zU0yEM57gBx2DSupWcbSVs7kVZDt6ATTOI7SLlZNcCKi8aF1xceURhkjPtdn1ERRJhEUC07Zgy90R9CcGgVd4DDeupN8HHJRVsnoqiQyllozs0PLXHAPGbXsBwVuhxa5ORlGW6YREXCQREJogAioJnLCUY7Nz3OpiWNJHjp3K0s204Uw3OhPDgMdBG0G8KTi1u0cTTJaIiidCIiACKutK3IEuaRH877rRV28DDeuuz8oZeO7Na+jjgHDNJ2aCpdEquiH1IXV7lqiIokwiIgAvj3UBOoE+C+oRW5Bx8GOixS9xccTeuCkTso6E6hw0HWF0sYXGgFScAtVNVaPOyjJSp8mksaOXwxXEEt8MOKnKLZstyUMNOOJ2lSlmza6nRv4U1BKXIRFDtid5CC6JpFzQfvG4fPcq26LYxcnSJUVgcCHAFpFCDhQ6151bsmyDGLGGraAi+tK6K6VHnJ6JGNYjy7srduGAUdK5Mil4NrTaaWJ238GnyOs2G+sV17muo1ugEAHO7TetgvKQaK4sW3IsJ7Q55dDJAcHGtAbqgm8UUseRLYq1WknNuad/g3yIiZMkLFW1MmJGdXBpLWjUAaLarJZQWe6HELwOY41rqJxBTGna6txHXqTxqvkqVpMlJkkOhnBtC3sriP3rKza1mTkgYTS5wo51LtQGFe2/gr87XRuJaJS+ra+S3RESBtnVNRuTY5/3Wud+UE+i8mmI7oji95q5xqSvXIsMOaWnAgg7CKFeWWtZj5Z5Y8Gn2XaHDQQfRM6drcQ1qlSfggr0vJOddGlmlxq5pLCdebgfAhecQILojg1gLnG4AYr0+wLP+jwGwz0r3O7zrz4YblPUNVRXok+pvwWCIiTNMLK/xCnnQ4LIbTTlCc7utAqN5I8FqlRZX2O6ag8zpsOc0a7qObv9FPG0pKyMuDy5WWTk86BMQ3NNxc1jhra4gEeddyr4kMtJa4EEGhBFCDqIWgyPsN8eK2K4EQmEOqftOaahrdd4vTk2ktyiKdnpiIiQGQo1pTPJQokQYta5w2gXeakrqm4AiMcw4OaWneKLq5OSutjySLELiXONSTUk4knSuIKlWlZ8SXeWRBQ6DocNYOkLqlZZ8VwYxpc44AcTqC0rVGE07ryel5OThjS8N7r3ULSdZaS2u+lVZKHY8j9HgshY5ovOtxNSfEqYs6VW6NuF9KsIiKJMKumrXhsuHOPZh4rttc/Uv3cQs5LwHPNG6iTsCYw4oyXVIR1WonCSjAkztpPijNIAFa3dnaosCMWODm4jDgutfU6opKkZcskpS6m9y4gW4fttB7W/Iq1lppkQVaa6xpG5ZaDAc/Op9kZx2DFd9kH65m/gUvkwwptDmDVZE0pbpmoWTy4m+hCHfdwb6rWLzW2Zrlo734gmjdguHDzWbmlUaPR6HH1ZOp+DkySb9HdGcTXPDGDQbquJ/ehQFdZQ/VtgwB/TZnO777z++1UqWls6NbE3KPU/P9j62lb8NNMaaaKbbUkIMUtaSWEBzCdLXCoPHwUFXU8OVlIMX7UMmC7Zizyp4oStM5OTjKP6cGtsGb5aAx2mma7a24/PerBZLIebvfCOnnt3XO9PBaqN0TsPBOY31JGHqofTyNEKetiFCuJznfdbf4nAKjnbffEBaGta0gg4k0Pb/wAVVBhl7g0Xkmg2lI0MscWnEEg7RctGGGEfyzz2XV5Z/hHFpoa6r1dy+UsQdNrXbOafkqRdktAMRwY3E4eFfRWTjGS+4oxZJwf2M2UjakKNc00d903Hdr3KaTRefsBa8DAhwGwgrT5Yk/RIm1nxtSeTEoySXk1dPqZThJyW6I9p5XQIVQysV3YaN/Np3VWVtnKKLNNzHBrWg5wABrUVF5J7VAkZJ8YuDB0Wl7qmgDW4nh4qMmIYoRe3Ipkz5JrfgkSE4+A8RGUzhWlRUXihu3rTyOW5wiwwRrYaH8px8VkFJlZJ8Vr3MAIhtz3X0ObpI10UpwjLkjjyzjtFnp9nWlCmG1hvDtYwcNoN4UtebZHk/S4f46/lcvSUllh0ujT0+V5I2zonZtkFhiRHZrRieAA0lZCdy+FaQoNRre6n+o+afxHnrocEe8d5tb+rwWMMu8METNOYSWh1Ls4CpFdatx401bJTm7pHO0Jsxoj4jgAXkuIGF+qqv7DywMtCbCMIOa2t4dQ3ku1EaVmF2S8B0RwYwFznXADElXOKaplabTPU7EyjgzfNZVrwKljsaaSCLirdeP2POGXmIcQ3ZrqO2HmuHgSvYAlMsOl7F0JWfHOAFSQALyTcBtWctLLCDDqIYMU6xzWeOncF25cH+VPfZXzWElJJ8UPLRdDaXvJNKAcSrMWKMlbFdRnlGXTEmWzb0WaADw0NBqA0HGlLyTeotm2g+XfykOmdQi8VFDjwURE0opKjPc5OXVe5sZHLfRGh/iYf0n5rUyE/Cjtzobw4adY7CDeF5dLyT4jIj2irYeaX33gOrQ9vRVvkOf5odx9fJUZMUabQ5h1M+pKW9noaIiUNEiWt1L9g4hU1i9N3cd6K5tbqX7PUKmsXpu9270TWL0mZ2o9eJXhfV8C+pwyyfZP9X3blwsjrmb+BXOyf6vu3LhY/XM38CqZfxDUP5fv/AJLbKCb5GA92kjNbtdd8zuWMyblOVmGA9FvPdsbePOitcuJurmQhoGedpub5A+KjWUORlI0b7T/qmcCR4n8qxpu5+x7DBFwwfmRVWnNcrFe/7zjTZg3yAUVEVD3NGKpUgrzJv6xsaXP22Zze+3D08FRqXZM1yUaG/QHCuw3HyJUoumQzR6oOj7ZM1yMZjzdR1HbDc7yJXpMXonYeC8+yllOSmH0wdzx+LHzqtfYM3yss06QCw7WinCh3q/A6k4mbr11wWRGbsfr4feC4Wj1sTvu4lc7H6+H3guFpdbE77uJWyu/4PGv0vkjqdYXtEPaeBUFTrC9oh7TwK7PtZHD6kfdHTG64+8PxLRZY+yRPwfG1Z6J1x94fiWiyv9ki/h+Nqoy90R7S9mT9/qZLJHpR/wC3icWqhCvskelH/t4nFqoQrY9zKZdkfkK+ya6ub9w71VCr7Jrq5v3DuBRk7Qw9/wDU68jva4ex/wABXpK83yM9rZsf8JW1ylnuQlojxjTNb3nXDwrXcls6uaQ/o9sb9zzbKSe5eZiPF4rmt7rbhTbSu9TsqG8iyXlv/Nme/wB5EvPh6qLkpI8tNQ2notOe7usvv30G9RrZneXjxIuhzjTui5vkArq3S/Qn4shLuk5gwojIgxY4OG41oulFM4XOVsqGTDnN6EUCMzVR9586+K3mSM9y0rDJPOaOTdtZcPEUO9YycHL2fCifal3GE7uOpm8WjxU7+HM9mxIkEm54z295tx8Qf9UvNXD2LIupF/lx7Ke+z1WYyc6qc9yfVajLf2V3eZxWXyc6qc9yfVdx+n8iub117f7KJERNCBfWD7LO9yFxeuWQ3tX4H+i42D7LO9yFxeueQvtX+N3FqplxIZx90P35PQkREiaxFtXqX7PUKmsXpu7jvRXNqdU/YqWxem7uO9E1i9NmdqPXiV4X1fAvqcMsn2T/AFfduXCxuubv4Fc7J/q+7cuNi9c3fwKpl/ENQ/l+/wDkn2xYEOZcHlzmuAoaUNQMLjpvVHlaWwmwpdnRaC477gT29I71s15vbs1yseI7RXNGxtw4V3rIy0lt5PV6JynNJvaJARESxrhERAG0gyDJ+XhOc4h7RmlwvwuII3V3q4s+QbAh8mytLyScSTiSs/kPNdZCPY9vB36VqyncdOpGDqnKMnjvYw9j9fD7wXC0utid93ErnZHXw+8FwtLrYnfdxK1V3/B5Z+l8kdTrC9oh7TwKgqdYXtEPaeBXZ9rI4fUj7o6ndf8A5P1LR5W+yRdjfjas7T6//L+taTKsfykbYPial8vdEe0vZkMfkj0o/wDbxOLVQhX+SPSj/wBvE4tVAFdHuZRLsj8hX2TXVzfuHcCqFX2TPVzfuHcCjJ2hh7/6nHIv2tmx/wAJU7+I89fDgDRWI7fzW/q8QoeRI/mm91/BdWVlmTD5t5EN7g8jMLWkjNoABXAUpfVVSr6nwO6b0vk5WEOQkpmYwc/6mHvxI8f9VmVqcrxyEGWlBi1vKPp941FfEvWWUob7lsv0CIimRNJkY4RDGlnG6NDNO83A+BJ/CqezJl0tHY83GG/nDsBo8eFQvlkznIRocT7rgT3cHeRKu8r7FiCYc+HDc5kSjgWtLucekDTC+/eq3SlT8k/BqstCDKOIwzmEbC4LMZOdVOe5P6ld2vBiMsxrYnTaIQd2UcAAe0CgVJk51U57k/qUYdj9xfN6y9v9lCiImRAvrB9lne5C4vXZkJ7Sfdu4tXXYPss73IXF67sgx/Mu9274mKifEhrH3Y/35Zv0REkaoIrcVGZKMhhxa2hINcfVEXU3wQlFPdoygUmblwwMIrzmhxrrOpEWo+UYCX2smZPDnu7vqFcQJOHDJLWgE7fXBESOdtTaNbRxTxJtfqd6i/8A5sD/AMof5G/JfEVFWOqTXBjcroLWRwGtDRmNNAABWrtSmZFSzIhi57GupmUzgDSufWlV8RKr1DXm3/xL/C/uUE60CJEAuAe4DZnFbPJmRhOlobnQ2EnOqS0E3PcMSiIxL72c1raxKi3gycNhq2GxpwqGgGm5d6ImuDJbb5IrLPhB/KBgDtd+J00wqsdaXWxO+7iURNaZtt2ZevilBUvJzfKgQWxKmpcW0upQblzsLr4e0/CURMS7WJxSWSPwasWfCD+UzBn41vx10wqpERgcCCAQRQg4EHQURZrbZvKMVwitNlQZeFGMJgaXMdW8nBpuvNwXmCIm9O7uzO1qScUiwteRbBMPNJOfDa81pi6tQKAXK6yAaDEjAioLACOwnBEU8npsqwr/ALkayQsmDAJMKGGk4mpJpqqSaDsU1ESNtvc1kklseVZYRS6ci10ENGwNCpkRPw7ULvkIiKREL1zJuKXysFxxzAPC70RFRn4Rbj5J8aE17S1wBabiDgQqiesyFLyswITA3OhvJvJJo00vJJpeiJeLdpE5xXS3+GebFWNuSLYEQMaSRmtdzqVqa6gF8RaF/cYqX2svsgIYeJhrgC0iGCDgQeUqCtTZ9mQZevJMDa4mpJO8kmi+okszfW0amliniT9yWiIqhk//2Q==',
      title: 'Empowering Businesses with IT Solutions',
      description: 'Providing top-tier staffing and IT consulting services for your business success.',
    },
    {
      image: 'data:image/jpeg;base64,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',
      title: 'Efficient Vendor Staffing Solutions',
      description: 'Connecting your business with experienced professionals for optimal performance.',
    },
    {
      image: 'data:image/jpeg;base64,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',
      title: 'Teamwork and Collaboration',
      description: 'Enhancing productivity through dedicated teamwork and expert project management.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkQWzcNh_jnP18-btvbrWUjI_jIrFGRq-6g&s',
      title: 'Driving Innovation in IT Services',
      description: 'Implementing modern technologies to keep your business at the forefront.',
    },
  ];

  return (
    <section className="h-96 text-gray-800">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-96">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroSection;
