const Contact = () => {
  return (
    <div className="mt-5">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Leave us a message!
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
        <section>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">You want to tell us something? Do you like our music? Need to know more about our future of this project?</p>
              <form action="#" className="space-y-8">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your email
                      </label>
                      <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your@email.com" required />
                  </div>
                  <div>
                      <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Subject
                      </label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you." required />
                  </div>
                  <div class="sm:col-span-2">
                      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your message
                      </label>
                      <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <div className="flex flex-col items-center">
                    <button type="submit" className="py-3 px-6 text-center rounded-md bg-violet-950">
                      Send message
                    </button>
                  </div>
              </form>
          </div>
        </section>
        </div>
      </div>
    </div>
  )
}

export default Contact