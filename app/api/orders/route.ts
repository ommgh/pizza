import { NextResponse } from "next/server";

export async function GET() {
	const orders = [
		{
			orderId: "PZA001",
			customerName: "John Doe",
			pizzaType: "Margherita",
			quantity: 2,
			orderDate: "2025-05-23 18:45",
			status: "Preparing",
		},
		{
			orderId: "PZA002",
			customerName: "Emily Smith",
			pizzaType: "Pepperoni",
			quantity: 1,
			orderDate: "2025-05-23 19:10",
			status: "Pending",
		},
		{
			orderId: "PZA003",
			customerName: "Carlos Ramirez",
			pizzaType: "Veggie Supreme",
			quantity: 3,
			orderDate: "2025-05-22 20:30",
			status: "Out for Delivery",
		},
		{
			orderId: "PZA004",
			customerName: "Ayesha Khan",
			pizzaType: "Margherita",
			quantity: 1,
			orderDate: "2025-05-21 14:15",
			status: "Delivered",
		},
		{
			orderId: "PZA005",
			customerName: "Michael Chen",
			pizzaType: "Pepperoni",
			quantity: 2,
			orderDate: "2025-05-21 13:50",
			status: "Cancelled",
		},
		{
			orderId: "PZA006",
			customerName: "Sara Ali",
			pizzaType: "Veggie Supreme",
			quantity: 1,
			orderDate: "2025-05-24 11:25",
			status: "Pending",
		},
		{
			orderId: "PZA007",
			customerName: "David Brown",
			pizzaType: "Pepperoni",
			quantity: 4,
			orderDate: "2025-05-24 09:00",
			status: "Preparing",
		},
		{
			orderId: "PZA008",
			customerName: "Laura Garcia",
			pizzaType: "Margherita",
			quantity: 2,
			orderDate: "2025-05-23 17:40",
			status: "Delivered",
		},
		{
			orderId: "PZA009",
			customerName: "Rohit Sharma",
			pizzaType: "Veggie Supreme",
			quantity: 1,
			orderDate: "2025-05-22 21:00",
			status: "Out for Delivery",
		},
		{
			orderId: "PZA010",
			customerName: "Mia Thompson",
			pizzaType: "Pepperoni",
			quantity: 2,
			orderDate: "2025-05-24 10:45",
			status: "Pending",
		},
	];
	return NextResponse.json(orders);
}
