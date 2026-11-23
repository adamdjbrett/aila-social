export default {
	title: "American Indian Law Alliance - Social Media",
	url: "https://aila.social",
	favicon: "/img/apple-touch-icon.png",
	language: "en",
	locale: "en_US",
	description: "The American Indian Law Alliance (AILA) is an Indigenous NGO that works with Indigenous nations, communities, and organizations in our struggle for sovereignty, human rights, and social justice for our peoples.",
	metasocial: {
		image: "/img/lakeback-header.png",
		facebook: "https://facebook.com/americanindianlawalliance",
		twitteruser: "@AILAnyc",
		twitter: "https://twitter.com/AILAnyc"
	},
	// AILA, shared @id with aila.ngo, lakeback.org and podcast.lakeback.org. Rendered as JSON-LD in widgets/seo.njk.
	organization: {
		"@type": "Organization",
		"@id": "https://aila.ngo/#organization",
		name: "American Indian Law Alliance",
		alternateName: "AILA",
		description: "An NGO in consultative status with the United Nations Economic & Social Council (ECOSOC)",
		url: "https://aila.ngo/",
		logo: "https://aila.ngo/icon-512x512.png",
		email: "aila@aila.ngo",
		sameAs: [
			"https://aila.social/",
			"https://lakeback.org/",
			"https://podcast.lakeback.org/",
			"https://www.instagram.com/americanindianlawalliance",
			"https://www.facebook.com/americanindianlawalliance",
			"https://bsky.app/profile/aila.social",
			"https://www.linkedin.com/company/american-indian-law-alliance",
			"https://x.com/ailanyc",
			"https://www.youtube.com/@aila-ngo"
		]
	},
	author: {
		name: "Adam DJ Brett",
		email: "info@adamdjbrett.com",
		url: "https://adamdjbrett.com"
	}
}
