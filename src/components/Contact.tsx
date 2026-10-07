import Lottie from "lottie-react"
import checkAnim from "../../src/assets/Success.json"; 
import { useState } from "react";

export function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    }

    return (
        <div className="w-full text-white/90 px-8 py-20 flex flex-col justify-center my-10 items-center">
            <div className="text-3xl font-bold text-center p-10 text-white max-sm:text-2xl">Contact <span className="text-purple-600">Me</span></div>
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl w-full max-sm:w-xs">
                {/* Left: Contact Info */}
                <div className="flex flex-col justify-center gap-8 p-10 rounded-2xl shadow-xl border border-white/30 bg-purple-500/10">
                    <h2 className="text-3xl font-medium | max-sm:text-xl">Let's Have A Chat</h2>
                    <p className="text-gray-400 text-lg max-sm:text-base">
                        Feel free to reach out to me through the following
                    </p>
                    
                    <div className="space-y-4 text-lg max-sm:text-base">
                        <div className="flex gap-1">
                            <div className="text-purple-400">Phone:</div>
                            <div>0942143127</div>
                        </div>

                        <div className="flex gap-1">
                            <div className="text-purple-400">Email:</div>
                            <div>kingestiff@gmail.com</div>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-10">
                        <a href="https://github.com/estifz" target="_blank" className="p-0.5 bg-gradient-to-t from-pink-700 to-purple-600 rounded-full hover:scale-110 duration-300">
                            <svg className="w-10 h-10 | max-sm:w-7 max-sm:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/></svg>
                        </a>

                        <a href="https://www.linkedin.com/in/estif/" target="_blank" className="p-0.5 bg-gradient-to-t from-pink-700 to-purple-600 rounded-full hover:scale-110 duration-300">
                            <svg className='w-10 h-10 | max-sm:w-7 max-sm:h-7' fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>
                        </a>

                        <a href="https://t.me/ethcodes" target="_blank" className="p-0.5 bg-gradient-to-t from-pink-700 to-purple-600 rounded-full hover:scale-110 duration-300">
                            <svg className="w-10 h-10 | max-sm:w-7 max-sm:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><g transform="scale(0.85) translate(55 55)"><path d="M599.9 114.6L502.6 558.3c-7.4 33.3-26.7 41.5-54 25.8l-149.2-110-72 69.2c-8 8-14.7 14.7-30.1 14.7l10.7-152.7 278.1-251.2c12.1-10.7-2.7-16.7-18.7-6L124.7 360.7 7.9 324.2c-32.2-10.1-32.8-32.2 6.7-47.6L571.6 67.4c26.6-9.8 49.8 6.6 28.3 47.2z"/></g></svg>
                        </a>
                        
                        <a href="https://medium.com/@estifanos" target="_blank" className="p-0.5 bg-gradient-to-t from-pink-700 to-purple-600 rounded-full hover:scale-110 duration-300">
                            <svg className="w-10 h-10 | max-sm:w-7 max-sm:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M465.4 96C508.8 96 544 131.2 544 174.6L544 258.4C542.1 258.3 540.2 258.2 538.3 258.2L537.9 258.2C527.9 258.2 515.6 260.6 506.8 265C496.8 269.6 488.1 276.5 480.8 285.6C469 300.2 461.9 319.9 460.2 342C460.1 342.7 460.1 343.3 460 344C459.9 344.7 459.9 345.2 459.9 345.9C459.8 347.1 459.8 348.3 459.8 349.5C459.8 351.4 459.7 353.3 459.8 355.3C461 405.4 488 445.5 536.1 445.5C538.8 445.5 541.4 445.4 544 445.1L544 465.5C544 508.9 508.8 544.1 465.4 544.1L174.6 544C131.2 544 96 508.8 96 465.4L96 174.6C96 131.2 131.2 96 174.6 96L465.4 96zM178.3 202.9L178.6 203C191.8 206 198.4 210.4 198.4 226.4L198.4 413.6C198.4 429.6 191.7 434 178.5 437L178.2 437.1L178.2 439.9L231 439.9L231 437.1L230.7 437C217.5 434 210.8 429.6 210.8 413.6L210.8 237.3L296.9 439.8L301.8 439.8L390.4 231.6L390.4 418.2C389.3 430.8 382.6 434.7 370.7 437.4L370.4 437.5L370.4 440.2L462.3 440.2L462.3 437.5L462 437.4C450.1 434.7 443.3 430.8 442.1 418.2L442 226.4L442.1 226.4C442.1 210.4 448.8 206 462 203L462.3 202.9L462.3 200.2L390.1 200.2L323.1 357.6L256.1 200.2L178.3 200.2L178.3 202.9zM544 404.3C518.9 396.9 501 369.2 502.8 336.5L502.8 336.5L543.9 336.5L543.9 404.3zM537.6 268.7C539.9 268.7 542 269 544 269.6L544 327L503.8 327C505.3 293.4 517.4 269.1 537.6 268.7z"/></svg>
                        </a>


                    </div>
                </div>

                {/* Right: Request Form */}
                <div className=" p-10 rounded-2xl shadow-xl border border-white/30">
                    <h2 className="text-3xl font-medium mb-8 | max-sm:text-xl">Send a Request</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <input
                            type="text"
                            required
                            placeholder="Your Name"
                            className="p-4 max-sm:p-2 text-lg rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 outline-none w-full max-sm:text-xs"
                        />
                        <input
                            type="email"
                            required
                            placeholder="Your Email"
                            className="p-4 max-sm:p-2 text-lg rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 outline-none w-full max-sm:text-xs"
                        />
                        <textarea
                            placeholder="Your Message"
                            required
                            rows={5}
                            className="p-4 max-sm:p-2 text-lg rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 outline-none w-full max-sm:text-xs"
                        >
                            
                        </textarea>
                        
                        <button className="flex justify-center bg-purple-600  transition-colors p-4 rounded-lg font-semibold text-lg max-sm:text-base hover:bg-purple-700 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={sent} 
                            > 
                            {sent ? (
                                <div className="flex">
                                    <Lottie animationData={checkAnim} loop={false} style={{ width: 30, height: 30 }} />
                                    <div>sent!</div>
                                </div>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
        </div>
        </div>
    );
}
