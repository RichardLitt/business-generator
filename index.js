const tokens = ['fashion', 'axe', 'roof', 'party', 'twee', 'skateboard', 'Pinterest', 'Truffaut', 'sartorial', 'Shoreditch', '3 wolf moon', 'paleo', 'viral', 'pour-over', 'Odd', 'Future', 'distillery',
'Pitchfork', 'pop-up', 'XOXO', 'blog', 'jean', 'shorts', 'keytar', 'Williamsburg', 'Intelligentsia', 'before they sold out', 'slow-carb', 'tattooed', 'typewriter', 'ethical', 'squid', 'literally', 'you probably haven\'t heard of them', 'Blue', 'Bottle', 'YOLO', 'Helvetica', 'art', 'party', 'Portland', 'church-key', 'Banksy', 'pork', 'belly', 'mustache', 'Thundercats', 'narwhal', 'banh mi', 'actually', 'scenester', 'mumblecore', 'pickled', 'heirloom', 'hoodie', 'asymmetrical', 'synth', 'lomo', 'chambray', 'Vice', 'try-hard', 'retro', 'aesthetic', 'leggings', 'kale', 'chips', 'American', 'Apparel', 'chillwave', 'farm-to-table', 'chia', 'street art', 'butcher', 'fingerstache', 'normcore', 'gluten-free', 'High Life', 'artisan', 'Marfa', 'organic', 'deep v', 'master', 'cleanse', 'kitsch', 'umami', 'put a bird on it', 'bespoke food', 'truck', 'bitters', 'tofu', 'photo', 'booth', 'readymade', 'drinking', 'vinegar', 'post-ironic', 'stumptown', 'cray', 'vegan', 'DIY', 'plaid', 'PBR', 'sriracha', 'mlkshk', 'forage', 'seitan', 'tote', 'bag', 'bicycle', 'rights', 'gentrify', 'cliche', 'occupy', 'flexitarian', 'irony', 'vinyl', "McSweeney's", 'Echo', 'Park', 'Etsy', 'next', 'level', 'biodiesel', 'swag', 'PBR&B', 'Carles', 'authentic', 'selfies', 'Cosby', 'sweater', 'whatever', 'polaroid', 'brunch', 'kogi', 'direct', 'trade', 'messenger', 'bag', 'yr', 'single-origin', 'coffee', 'tousled', '+1', 'wayfarers', 'Tumblr', 'banjo', 'Bushwick', 'Austin', 'keffiyeh', '90s', 'meggings', 'cred', 'Godard', 'salvia', 'craft', 'beer', 'quinoa', 'selvage', 'Schlitz', 'hashtag', 'Brooklyn', 'semiotics', 'trust fund', 'pug', 'Tonx', 'gastropub', 'meh', 'freegan', 'ugh', 'fap', 'beard', 'disrupt', 'letterpress', 'dreamcatcher', 'small batch', 'crucifix', 'ennui', 'Kickstarter', 'cardigan', 'four', 'loko', 'fanny', 'pack', 'locavore', 'raw', 'denim', '8-bit', 'Neutra', 'VHS', 'fixie', 'hella', 'shabby', 'chic', 'Wes', 'Anderson', 'lo-fi', 'flannel', 'sustainable', 'mixtape', 'cornhole']

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const places = ['weddings', 'barns', 'Urban Outfitters', 'colleges', 'bars', 'your parents house', 'a cabin in the woods', 'an art gallery in Paris', 'a Balinese atelier', 'a blockchain marketplace']

const types = ['oil paintings', 'mashups', 'collages', 'mementos', 'tickets', 'curios']

function selectRandom(list) {
  return list[getRandomInt(list.length)]
}

const companies = ['google', 'facebook', 'airbnb', 'the altMBA', 'dropbox', 'bitcoin', 'hulu', 'auto insurance']


console.log(`Sell ${selectRandom(tokens)} ${selectRandom(types)} at ${selectRandom(places)}.

Or, like ${selectRandom(companies)}, but for ${selectRandom(tokens)}`)

