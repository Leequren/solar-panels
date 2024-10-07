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
    "name" TEXT NOT NULL,
    "images" TEXT[],
    "defaultPrice" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "power" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "description" TEXT[],
    "onMainpage" BOOLEAN NOT NULL,

    CONSTRAINT "Workstation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadBattery12VChargingEquip" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workstationId" INTEGER NOT NULL,

    CONSTRAINT "LeadBattery12VChargingEquip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvertorEquip" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workstationId" INTEGER NOT NULL,

    CONSTRAINT "InvertorEquip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PowerbankEquip" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "countUsb" INTEGER NOT NULL,
    "workstationId" INTEGER NOT NULL,

    CONSTRAINT "PowerbankEquip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniversalVoltageEquip" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workstationId" INTEGER NOT NULL,

    CONSTRAINT "UniversalVoltageEquip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JumpStarterEquip" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workstationId" INTEGER NOT NULL,

    CONSTRAINT "JumpStarterEquip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolarPanelEquip" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workstationId" INTEGER NOT NULL,

    CONSTRAINT "SolarPanelEquip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolarTrackerEquip" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workstationId" INTEGER NOT NULL,

    CONSTRAINT "SolarTrackerEquip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuickChargeModuleEquip" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workstationId" INTEGER NOT NULL,

    CONSTRAINT "QuickChargeModuleEquip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart_Workstation" (
    "id_cart_workstation" SERIAL NOT NULL,
    "cartId" INTEGER,
    "workstationId" INTEGER,

    CONSTRAINT "Cart_Workstation_pkey" PRIMARY KEY ("id_cart_workstation")
);

-- CreateTable
CREATE TABLE "Part" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT[],
    "images" TEXT[],
    "characteristics" JSONB NOT NULL,
    "defaultPrice" INTEGER NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartConfiguration" (
    "id_configuration" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "keyConfig" TEXT NOT NULL,
    "valueConfig" TEXT NOT NULL,
    "partId" INTEGER,

    CONSTRAINT "PartConfiguration_pkey" PRIMARY KEY ("id_configuration")
);

-- CreateTable
CREATE TABLE "CartPart" (
    "id_cart_part" SERIAL NOT NULL,
    "cartId" INTEGER NOT NULL,
    "partId" INTEGER NOT NULL,
    "configPartId" INTEGER NOT NULL,

    CONSTRAINT "CartPart_pkey" PRIMARY KEY ("id_cart_part")
);

-- AddForeignKey
ALTER TABLE "LeadBattery12VChargingEquip" ADD CONSTRAINT "LeadBattery12VChargingEquip_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvertorEquip" ADD CONSTRAINT "InvertorEquip_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PowerbankEquip" ADD CONSTRAINT "PowerbankEquip_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversalVoltageEquip" ADD CONSTRAINT "UniversalVoltageEquip_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JumpStarterEquip" ADD CONSTRAINT "JumpStarterEquip_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolarPanelEquip" ADD CONSTRAINT "SolarPanelEquip_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolarTrackerEquip" ADD CONSTRAINT "SolarTrackerEquip_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuickChargeModuleEquip" ADD CONSTRAINT "QuickChargeModuleEquip_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_Workstation" ADD CONSTRAINT "Cart_Workstation_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_Workstation" ADD CONSTRAINT "Cart_Workstation_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartConfiguration" ADD CONSTRAINT "PartConfiguration_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartPart" ADD CONSTRAINT "CartPart_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartPart" ADD CONSTRAINT "CartPart_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartPart" ADD CONSTRAINT "CartPart_configPartId_fkey" FOREIGN KEY ("configPartId") REFERENCES "PartConfiguration"("id_configuration") ON DELETE RESTRICT ON UPDATE CASCADE;
