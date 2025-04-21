import schools from '../../data/parcourScholaire/schoolData.json';
import filieres from '../../data/parcourScholaire/filiere.json';
import { School } from '../../models/schoolModel';
import { EDiplomaLevels, EEstablishmentType, ESchoolType } from '../../types/schoolTypes';

const seedSchool = async () => {
  try {
    // const schoolsToInsert = schools.map((item: any) => ({
    //   title: item.title,
    //   website: item.website,
    //   cities: item.cities,
    //   schoolType: item.schoolType as ESchoolType,
    //   establishmentType: item.establishmentType as EEstablishmentType,
    //   fields: item.fields,
    //   diplomaLevels: item.diplomaLevels.map((level: string) => level as EDiplomaLevels),
    //   requirements: item.requirements,
    //   admission: item.admission,
    //   concours: item.concours,
    //   isBoardingAvailable: item.isBoardingAvailable,
    //   isScholarshipAvailable: item.isScholarshipAvailable,
    //   internationalPrograms: item.internationalPrograms,
    //   requiredHighSchoolBranche: item.requiredHighSchoolBranche,
    //   requiredHighSchoolFiliere: item.requiredHighSchoolFiliere,
    // }));
    // Get all valid filiere titles
    const validFilieres = filieres.map((f) => f.title);

    const schoolsToInsert = schools.map((item: any) => {
      // Validate requiredHighSchoolFiliere
      const invalidFilieres = item.requiredHighSchoolFiliere.filter(
        (filiere: string) => !validFilieres.includes(filiere)
      );

      if (invalidFilieres.length > 0) {
        console.warn(`Warning: Invalid filieres for school ${item.title}:`, invalidFilieres);
      }

      return {
        title: item.title,
        website: item.website,
        cities: item.cities,
        schoolType: item.schoolType as ESchoolType,
        establishmentType: item.establishmentType as EEstablishmentType,
        fields: item.fields,
        diplomaLevels: item.diplomaLevels.map((level: string) => level as EDiplomaLevels),
        requiredHighSchoolFiliere: item.requiredHighSchoolFiliere.filter((filiere: string) =>
          validFilieres.includes(filiere)
        ),
        requiredHighSchoolBranche: item.requiredHighSchoolBranche,
        admission: item.admission,
        concours: item.concours,
        isBoardingAvailable: item.isBoardingAvailable,
        isScholarshipAvailable: item.isScholarshipAvailable,
        internationalPrograms: item.internationalPrograms,
      };
    });

    await School.insertMany(schoolsToInsert);
    console.log('Schools seeded successfully');
  } catch (error) {
    console.error('Failed to seed schools:', error);
  }
};

export default seedSchool;
