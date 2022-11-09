import React from 'react';

const SignUp = () => {
    return (
        <div>
            <section className="p-6 bg-gray-100 text-gray-800">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
			<span className="block mb-2 text-rose-600">Mamba design system</span>
			<h1 className="text-5xl font-extrabold text-gray-900">Build it with Mamba</h1>
			<p className="my-8">
				<span className="font-medium text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
			</p>
			<form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<label for="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-rose-600 border-gray-300" />
				</div>
				<div>
					<label for="lastname" className="text-sm sr-only">Email address</label>
					<input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-rose-600 border-gray-300" />
				</div>
				<button type="button" className="w-full py-2 font-semibold rounded bg-rose-600 text-gray-50">Join the waitlist</button>
			</form>
		</div>
		<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
	</div>
</section>
        </div>
    );
};

export default SignUp;