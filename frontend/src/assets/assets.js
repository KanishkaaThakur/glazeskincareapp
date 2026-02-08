import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

// --- PRODUCT IMAGES ---
import hyaluronic from './hyaluronic.png'
import barrier from './barrier.png'
import sunscreen from './sunscreen.png'
import niacinamide from './niacinamide.png'
import retinol from './retinol.png'
import azealicacid from './azealicacid.png'
import vitaminc from './vitaminc.png'
import caffeine from './caffeine.png'
import peptidecream from './peptidecream.png'
import snailmucin from './snailmucin.png'
import body from './body.png'
import lip from './lip.png'

export const assets = {
    logo, hero_img, cart_icon, dropdown_icon, exchange_icon,
    profile_icon, quality_icon, search_icon, star_dull_icon, 
    star_icon, bin_icon, support_img, menu_icon, about_img, 
    contact_img, razorpay_logo, stripe_logo, cross_icon
}

export const products = [
    // --- 5 BESTSELLERS ---
    {
        _id: "glaze_best_01",
        name: "Hyaluronic Acid Serum 2%",
        description: "A powerful hydration booster designed to penetrate deep into the skin layers. This 2% Hyaluronic Acid formula instantly plumps fine lines, eliminates dryness, and restores a youthful, dewy bounce to tired skin.",
        price: 499,
        image: [hyaluronic], 
        category: "Face", subCategory: "Serums", sizes: ["30ml"], date: 1716634345448, bestseller: true,
        usage: [
            "Cleanse your face with a gentle cleanser.",
            "Apply 2-3 drops to damp skin for better absorption.",
            "Follow with a moisturizer to lock in hydration."
        ],
        ingredients: "Aqua (Water), Sodium Hyaluronate (2%), Panthenol (Vitamin B5), Phenoxyethanol, Ethylhexylglycerin, PEG-40 Hydrogenated Castor Oil, Citric Acid, Disodium EDTA, Propanediol, Betaine."
    },
    {
        _id: "glaze_best_02",
        name: "Barrier Repair Moisturizer",
        description: "Your daily defense against damage. This rich, restorative cream is packed with Ceramides and Shea Butter to fix a compromised skin barrier, soothe irritation, and lock in moisture for 24 hours.",
        price: 799,
        image: [barrier], 
        category: "Face", subCategory: "Moisturizers", sizes: ["50ml"], date: 1716634345449, bestseller: true,
        usage: [
            "Take a coin-sized amount of cream.",
            "Massage gently onto face and neck.",
            "Use as the last step of your PM routine."
        ],
        ingredients: "Aqua, Caprylic/Capric Triglyceride, Glycerin, Cetearyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum, Butyrospermum Parkii (Shea) Butter."
    },
    {
        _id: "glaze_best_03",
        name: "Mineral Sunscreen SPF 50",
        description: "A 100% mineral sunscreen that offers broad-spectrum protection without the chalky white cast. Its lightweight, non-comedogenic formula sits comfortably under makeup and is safe for even the most sensitive skin types.",
        price: 1200,
        image: [sunscreen], 
        category: "Face", subCategory: "Sunscreen", sizes: ["50ml"], date: 1716634345450, bestseller: true,
        usage: [
            "Apply generously as the last step of your AM routine.",
            "Wait 15 minutes before sun exposure.",
            "Reapply every 2 hours when outdoors."
        ],
        ingredients: "Zinc Oxide (20%), Titanium Dioxide, Aloe Barbadensis Leaf Juice, C12-15 Alkyl Benzoate, Caprylic/Capric Triglyceride, Polyglyceryl-3 Polyricinoleate, Isostearic Acid, Polyhydroxystearic Acid, Vitamin E Acetate."
    },
    {
        _id: "glaze_best_04",
        name: "Niacinamide 7% Serum",
        description: "The ultimate solution for texture and pores. This 7% Niacinamide serum regulates excess oil production, minimizes the appearance of enlarged pores, and fades blemish marks for a smoother, clearer complexion.",
        price: 699,
        image: [niacinamide], 
        category: "Face", subCategory: "Serums", sizes: ["30ml"], date: 1716634345451, bestseller: true,
        usage: [
            "Apply 2-3 drops to clean, dry skin.",
            "Gently pat until fully absorbed.",
            "Use morning and night before heavier creams."
        ],
        ingredients: "Aqua, Niacinamide (7%), Zinc PCA (1%), Pentylene Glycol, Tamarindus Indica Seed Gum, Xanthan Gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin."
    },
    {
        _id: "glaze_best_05",
        name: "Retinol Complex 2%",
        description: "An advanced night serum engineered to accelerate cell turnover. It targets deep wrinkles, fine lines, and sun spots while you sleep, revealing fresher, younger-looking skin by morning.",
        price: 2100,
        image: [retinol], 
        category: "Face", subCategory: "Treatments", sizes: ["30ml"], date: 1716634345452, bestseller: true,
        usage: [
            "Apply a pea-sized amount to dry skin at night.",
            "Start by using 2 times a week to build tolerance.",
            "Always use SPF the next morning."
        ],
        ingredients: "Squalane, Caprylic/Capric Triglyceride, Simmondsia Chinensis (Jojoba) Seed Oil, Retinol (0.2%), Solanum Lycopersicum (Tomato) Fruit Extract, Hydroxypinacolone Retinoate, BHT, Tocopherol."
    },

    // --- HIDDEN ADDITIONS ---
    {
        _id: "glaze_coll_01",
        name: "5% Lactic Body Lotion",
        description: "Don't ignore your body skin. This exfoliating lotion uses 5% Lactic Acid to gently dissolve rough patches and 'strawberry skin' (Keratosis Pilaris), leaving your arms and legs impossibly smooth.",
        price: 799,
        image: [body], 
        category: "Body", subCategory: "Moisturizers", sizes: ["200ml"], date: 1716634345455, bestseller: false,
        usage: [
            "Pump a generous amount into hands.",
            "Massage into rough areas like elbows and knees.",
            "Use daily for smoother skin texture."
        ],
        ingredients: "Aqua, Lactic Acid (5%), Urea, Butyrospermum Parkii (Shea) Butter, Cocos Nucifera (Coconut) Oil, Glycerin, Stearic Acid, Glyceryl Stearate, Cetyl Alcohol, Dimethicone, Sodium Hydroxide."
    },
    {
        _id: "glaze_coll_02",
        name: "Collagen Lip Masque",
        description: "A luxurious overnight treatment that rescues dry, chapped lips. Infused with collagen peptides and rosehip oil, it deeply repairs lip tissue while you sleep so you wake up with a plump, hydrated pout.",
        price: 499,
        image: [lip], 
        category: "Face", subCategory: "Lip Care", sizes: ["15ml"], date: 1716634345456, bestseller: false,
        usage: [
            "Scoop a small amount with a spatula or finger.",
            "Apply a thick layer to lips before bed.",
            "Wipe off any excess in the morning."
        ],
        ingredients: "Diisostearyl Malate, Hydrogenated Polyisobutene, Phytosteryl/Isostearyl/Cetyl/Stearyl/Behenyl Dimer Dilinoleate, Hydrolyzed Collagen, Peptides, Lanolin, Rosa Canina (Rosehip) Fruit Oil, Flavor."
    },

    // --- 5 NEW LAUNCHES ---
    {
        _id: "glaze_new_01",
        name: "Azelaic Acid 10%",
        description: "A multi-tasking hero for redness and acne scars. This 10% Azelaic Acid suspension targets rosacea-prone skin, calms inflammation, and fades stubborn post-acne marks without irritation.",
        price: 599,
        image: [azealicacid], 
        category: "Face", subCategory: "Serums", sizes: ["30ml"], date: 1716634345460, bestseller: false,
        usage: [
            "Apply a thin layer to affected areas.",
            "Use once daily in the evening.",
            "Follow with a soothing moisturizer."
        ],
        ingredients: "Aqua, Azelaic Acid (10%), Propanediol, Glycerin, Salicylic Acid (0.5%), Centella Asiatica Extract, Allantoin, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin."
    },
    {
        _id: "glaze_new_02",
        name: "Vitamin C Booster",
        description: "Wake up your glow. This potent 15% Vitamin C serum fights dullness and protects against pollution. It visibly brightens skin tone and fades hyperpigmentation for a radiant, healthy look.",
        price: 799,
        image: [vitaminc], 
        category: "Face", subCategory: "Serums", sizes: ["30ml"], date: 1716634345461, bestseller: false,
        usage: [
            "Apply 2-3 drops to clean, dry skin.",
            "Use in the morning for antioxidant protection.",
            "Follow with sunscreen."
        ],
        ingredients: "Aqua, L-Ascorbic Acid (15%), Ethoxydiglycol, Glycerin, Ferulic Acid (0.5%), Tocopherol (Vitamin E), Sodium Hyaluronate, Panthenol, Sodium Hydroxide, Phenoxyethanol."
    },
    {
        _id: "glaze_new_03",
        name: "Caffeine Eye Serum",
        description: "Like an espresso shot for your eyes. Concentrated Caffeine and Green Tea extract work together to constrict blood vessels, significantly reducing morning puffiness and dark under-eye circles.",
        price: 999,
        image: [caffeine], 
        category: "Face", subCategory: "Eye Care", sizes: ["15ml"], date: 1716634345462, bestseller: false,
        usage: [
            "Dispense a tiny drop onto your ring finger.",
            "Gently tap around the eye contour area.",
            "Use morning and night."
        ],
        ingredients: "Aqua, Caffeine (5%), Maltodextrin, Epigallocatechin Gallatyl Glucoside (EGCG), Sodium Hyaluronate, Glycerin, Lactic Acid, Hydroxyethylcellulose, Phenoxyethanol."
    },
    {
        _id: "glaze_new_04",
        name: "Peptide Firming Cream",
        description: "A high-performance anti-aging cream packed with Matrixyl 3000 and Copper Peptides. It stimulates natural collagen production to firm sagging skin and smooth out deep-set wrinkles.",
        price: 1499,
        image: [peptidecream], 
        category: "Face", subCategory: "Moisturizers", sizes: ["50ml"], date: 1716634345463, bestseller: false,
        usage: [
            "Warm the cream between your palms.",
            "Press gently into face and neck.",
            "Use morning and night for firming benefits."
        ],
        ingredients: "Aqua, Glycerin, Butylene Glycol, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7 (Matrixyl 3000), Copper Tripeptide-1, Squalane, Amino Acids, Carbomer, Polysorbate 20."
    },
    {
        _id: "glaze_new_05",
        name: "Snail Mucin Essence",
        description: "The viral secret to 'Glass Skin'. Formulated with 96% Snail Secretion Filtrate, this essence hydrates, repairs damage, and fades acne scars, leaving your skin slick, glowing, and intensely moisturized.",
        price: 1800,
        image: [snailmucin], 
        category: "Face", subCategory: "Essence", sizes: ["100ml"], date: 1716634345464, bestseller: false,
        usage: [
            "Apply to slightly damp skin after cleansing.",
            "Pat gently until the texture becomes tacky.",
            "Follow with serum and moisturizer."
        ],
        ingredients: "Snail Secretion Filtrate (96%), Betaine, Butylene Glycol, 1,2-Hexanediol, Sodium Polyacrylate, Phenoxyethanol, Sodium Hyaluronate, Allantoin, Ethyl Hexanediol, Panthenol."
    }
]