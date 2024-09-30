-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workstation" (
    "id" SERIAL NOT NULL,
    "quickChargeModule" JSONB NOT NULL,
    "invertorModule" JSONB NOT NULL,
    "powerbankModule" JSONB NOT NULL,
    "jumpStarter" JSONB NOT NULL,
    "universalVoltageModule" JSONB NOT NULL,
    "solarPanelModule" JSONB NOT NULL,
    "solarTracker" JSONB NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Workstation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart_Workstation" (
    "id_cart_workstation" SERIAL NOT NULL,
    "cartId" INTEGER NOT NULL,
    "workstationId" INTEGER NOT NULL,

    CONSTRAINT "Cart_Workstation_pkey" PRIMARY KEY ("id_cart_workstation")
);

-- CreateTable
CREATE TABLE "Part" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descrption" TEXT NOT NULL,
    "images" TEXT[],
    "characteristics" JSONB NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartConfiguration" (
    "id_configuration" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "usbConfigrationId" INTEGER,

    CONSTRAINT "PartConfiguration_pkey" PRIMARY KEY ("id_configuration")
);

-- CreateTable
CREATE TABLE "UsbConfiguration" (
    "id_usb_configuration" SERIAL NOT NULL,
    "count_usb" INTEGER NOT NULL,
    "configurationId" INTEGER NOT NULL,

    CONSTRAINT "UsbConfiguration_pkey" PRIMARY KEY ("id_usb_configuration")
);

-- CreateTable
CREATE TABLE "CartPart" (
    "id_cart_part" SERIAL NOT NULL,
    "cartId" INTEGER NOT NULL,
    "partId" INTEGER NOT NULL,
    "configPartId" INTEGER NOT NULL,

    CONSTRAINT "CartPart_pkey" PRIMARY KEY ("id_cart_part")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsbConfiguration_configurationId_key" ON "UsbConfiguration"("configurationId");

-- AddForeignKey
ALTER TABLE "Cart_Workstation" ADD CONSTRAINT "Cart_Workstation_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_Workstation" ADD CONSTRAINT "Cart_Workstation_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsbConfiguration" ADD CONSTRAINT "UsbConfiguration_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "PartConfiguration"("id_configuration") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartPart" ADD CONSTRAINT "CartPart_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartPart" ADD CONSTRAINT "CartPart_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartPart" ADD CONSTRAINT "CartPart_configPartId_fkey" FOREIGN KEY ("configPartId") REFERENCES "PartConfiguration"("id_configuration") ON DELETE RESTRICT ON UPDATE CASCADE;
