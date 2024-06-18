const appRoutes = [
	{
		name: "tutor_signup",
    list: "/tutor-signup",
    create: "/tutor-signup/create"
	},
	{
		name: "blog_posts",
		list: "/blog-posts",
		create: "/blog-posts/create",
		edit: "/blog-posts/edit/:id",
		show: "/blog-posts/show/:id",
		meta: {
			canDelete: true,
		},
	},
	{
		name: "categories",
		list: "/categories",
		create: "/categories/create",
		edit: "/categories/edit/:id",
		show: "/categories/show/:id",
		meta: {
			canDelete: true,
		},
	},
];

export default appRoutes;
