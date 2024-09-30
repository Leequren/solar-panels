/*
  Warnings:

  - You are about to drop the column `invertorModule` on the `Workstation` table. All the data in the column will be lost.
  - You are about to drop the column `jumpStarter` on the `Workstation` table. All the data in the column will be lost.
  - You are about to drop the column `powerbankModule` on the `Workstation` table. All the data in the column will be lost.
  - You are about to drop the column `quickChargeModule` on the `Workstation` table. All the data in the column will be lost.
  - You are about to drop the column `solarPanelModule` on the `Workstation` table. All the data in the column will be lost.
  - You are about to drop the column `solarTracker` on the `Workstation` table. All the data in the column will be lost.
  - You are about to drop the column `universalVoltageModule` on the `Workstation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Workstation" DROP COLUMN "invertorModule",
DROP COLUMN "jumpStarter",
DROP COLUMN "powerbankModule",
DROP COLUMN "quickChargeModule",
DROP COLUMN "solarPanelModule",
DROP COLUMN "solarTracker",
DROP COLUMN "universalVoltageModule";

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
