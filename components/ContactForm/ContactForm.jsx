export default function ContactForm() {
	return <section className="pt-16  md:ml-8">
		<div className="container mx-auto">
      <div className="flex flex-col lg:flex-row  dark:text-white">
				<div>
						<h4 className="text-4xl font-serif  uppercase  tracking-wide mb-2">
Get In Touch
						</h4>
						<h2 className="text-6xl font-serif leading-none mb-12">
Let&apos;s Work Together 
						</h2>
				</div>
				<form className="flex-1 rounded-2xl flex flex-col gap-y-6 pb-20 p-6 border border-pink-900">
						<div>
						<input type="text" name="name" class="w-full px-2 bg-transparent border-b border-pink-900 py-3 outline-none placeholder:text-gray-600 dark:placeholder:text-white focus:border-pink-400 transition-all duration-300" placeholder="Your name" autocomplete="name"/>
						</div>
						<div>
						<input type="text" name="email" class="w-full px-2 bg-transparent border-b border-purple-900 py-3 outline-none placeholder:text-gray-600 dark:placeholder:text-white focus:border-purple-400 transition-all duration-300" placeholder="Your email" autocomplete="email"/>
						</div>
						<div>
						<textarea name="message" class="w-full px-2 bg-transparent border-b border-purple-900 py-8 outline-none placeholder:text-gray-600 dark:placeholder:text-white transition-all focus:border-purple-400 duration-300 resize-none" placeholder="Your Message"></textarea>
						</div>
						<div>
						<input class="mr-2" type="checkbox" id="accept_terms" name="accept_terms"/>
						<label class="font-medium" for="accept_terms">I understand and agree to the Privacy Policy.</label>
						</div>
				</form>
			</div>
		</div>
	</section>
}