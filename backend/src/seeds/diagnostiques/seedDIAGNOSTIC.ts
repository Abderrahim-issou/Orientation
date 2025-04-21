import diagnosticData from "../../data/diagnostiques/diagnostiques.json";
import { Diagnostique } from "../../models/diagnostiqueModel";
import { IDiagnostique } from "../../types/diagnostiqueTypes";

const seedDIAGNOSTIC = async () => {
  try {
    await Diagnostique.deleteMany({});

    const diagnostics = diagnosticData.map(
      (
        item: Pick<IDiagnostique, "diagnostique" | "description" | "objectif">
      ) => ({
        diagnostique: item.diagnostique,
        description: item.description,
        objectif: item.objectif,
      })
    );

    await Diagnostique.insertMany(diagnostics);
    console.log(`✅ Seeded ${diagnostics.length} diagnostic successfully.`);
  } catch (error) {
    console.error("❌ Error seeding diagnostic:", error);
  }
};

export default seedDIAGNOSTIC;
