/*
  Warnings:

  - You are about to drop the column `workstationId` on the `LeadBattery12VChargingEquip` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "LeadBattery12VChargingEquip" DROP CONSTRAINT "LeadBattery12VChargingEquip_workstationId_fkey";

-- AlterTable
ALTER TABLE "LeadBattery12VChargingEquip" DROP COLUMN "workstationId";

-- CreateTable
CREATE TABLE "_LeadBattery12VChargingEquipToWorkstation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LeadBattery12VChargingEquipToWorkstation_AB_unique" ON "_LeadBattery12VChargingEquipToWorkstation"("A", "B");

-- CreateIndex
CREATE INDEX "_LeadBattery12VChargingEquipToWorkstation_B_index" ON "_LeadBattery12VChargingEquipToWorkstation"("B");

-- AddForeignKey
ALTER TABLE "_LeadBattery12VChargingEquipToWorkstation" ADD CONSTRAINT "_LeadBattery12VChargingEquipToWorkstation_A_fkey" FOREIGN KEY ("A") REFERENCES "LeadBattery12VChargingEquip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LeadBattery12VChargingEquipToWorkstation" ADD CONSTRAINT "_LeadBattery12VChargingEquipToWorkstation_B_fkey" FOREIGN KEY ("B") REFERENCES "Workstation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
