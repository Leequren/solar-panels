-- DropForeignKey
ALTER TABLE "LeadBattery12VChargingEquip" DROP CONSTRAINT "LeadBattery12VChargingEquip_workstationId_fkey";

-- AlterTable
ALTER TABLE "LeadBattery12VChargingEquip" ALTER COLUMN "workstationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LeadBattery12VChargingEquip" ADD CONSTRAINT "LeadBattery12VChargingEquip_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
