import { db } from "../db";

const posts = [
  {
    slug: "shoes-on-hands",
    title: "Why Shoes Belong on Your Hands",
    content: `Let's challenge convention: shoes aren't just for feet anymore. Wearing shoes on your hands offers surprising advantages that podiatrists don't want you to know about.
First, superior grip. Those treaded soles that help you navigate icy sidewalks? They're equally effective for climbing trees, opening stubborn jars, or dominating at rock-paper-scissors. Your opponents won't see it coming.
Second, protection. Why do we baby our hands with flimsy gloves when industrial-strength footwear exists? Shoe-hands laugh at thorny roses, hot stovetops, and awkward handshakes with people who squeeze too hard.
Third, fashion revolution. Tired of boring mittens? Strap on some light-up sneakers and become the life of every party. Jazz hands have nothing on jazz feet-hands.
Finally, efficiency. You're already buying shoes. Why invest in separate hand protection when your Crocs are right there, waiting to fulfill their true multipurpose destiny?
Free your hands. Shoe them.`,
  },
  {
    slug: "mismatched-socks",
    title: "In Defense of Mismatched Socks",
    content: `Let me share a revolutionary truth that will free you from one of life's most pointless anxieties: matching socks are a scam.
Think about it. You spend precious morning minutes rummaging through your drawer, desperately seeking that one navy sock's soulmate. You fold laundry with the focus of a surgeon, pairing argyles with argyles and stripes with stripes. And for what? So your feet can experience the thrill of symmetry that literally nobody will see once you put on shoes?
The matching sock industrial complex wants you to believe that coordinated feet are somehow more civilized. But I'm here to tell you that your left foot doesn't care if it's wearing polka dots while your right foot rocks geometric patterns. They're separated by your entire body. They'll never even see each other.
Mismatched socks are actually a sign of efficiency and creativity. You're someone who understands that life is too short to waste on arbitrary fabric coordination. You're a rebel who recognizes that both socks serve the exact same function regardless of their pattern.
So embrace the chaos. Wear one Christmas sock in July paired with a neon athletic sock. Let your feet be the ultimate expression of practical freedom. Your toes will thank you, and your laundry routine will become infinitely simpler.`,
  },
  {
    slug: "whiskers-culineary-catstrophe",
    title: "Whiskers' Culinary Catastrophe",
    content: `Today was supposed to be the day. After weeks of watching cooking shows from his perch on the back of the couch, Whiskers finally decided to attempt his masterpiece: cream of mushroom soup with fresh-baked biscuits.

The preparation was flawless. He'd batted the measuring cups off the counter with precision, selected the finest mushrooms from the crisper drawer, and only knocked over two jars of spices in the process. The biscuits rose beautifully in the oven, golden and fluffy. The soup simmered on the stove, filling the kitchen with an aroma so divine that even the dog looked impressed.

Whiskers stood back, admiring his work with the pride only a feline chef could muster. This was it. This would prove once and for all that cats were superior to humans in every possible way, including the culinary arts.

Then came the final touch: a splash of milk to make the soup perfectly creamy. He poured it in with a dramatic flourish, whiskers twitching with anticipation.

The smell hit him immediately.

Whiskers peered into the carton. Expiration date: three weeks ago.

He sat down heavily, tail swishing in defeat. The soup was ruined. The biscuits would go uneaten. And worst of all, he'd have to destroy the evidence before his humans came home and discovered he'd been on the counter again.`,
  },
];

db.post.createMany({ data: posts }).then((ok) => {
  console.log(ok);
});
