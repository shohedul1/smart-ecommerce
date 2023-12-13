import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import { Products } from "../../../../type";

export const POST = async (request: NextRequest) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    try {
        const reqBody = await request.json();
        const { items, email } = await reqBody;
        const extractingItems = await items.map((item: Products) => ({
            quantity: item.attributes.quantity,
            price_data: {
                currency: "usd",
                unit_amount: item.attributes.price * 100,
                product_data: {
                    name: item.attributes.title,
                    description: item.attributes.description,
                    image: [item.attributes.image.data.attributes.url],
                },
            },
        }));
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: extractingItems,
            mode: 'payment',
            success_url: `${process.env.NEXTAUTH_URL}/success`,
            cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
            metadata: {
                email,
            },
        });

        return NextResponse.json({
            message: "Connection is Active!",
            success: true,
            id: session.id,
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}