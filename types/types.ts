enum Status {
	Pending = "Pending",
	Preparing = "Preparing",
	OutForDelivery = "Out for Delivery",
	Delivered = "Delivered",
	Cancelled = "Cancelled",
}

type Orders = {
	orderId: string;
	orderDate: string;
	customerName: string;
	pizzaType: string;
	quantity: number;
	status: Status;
};
