switch (diagName) {
    // const answers = [
    //     { axis: "Communication", answers: 4 },
    //     { axis: "Teamwork", answers: 5 },
    //     { axis: "Problem Solving", answers: 3 },
    //     { axis: "Creativity", answers: 4 },
    //     { axis: "Leadership", answers: 2 },
    //     { axis: "Adaptability", answers: 5 },
    //   ];
    case 'beckDepression':
        res.status(200).send(new ApiResponse(200, calculateBeckDepressionResult(data)));
        return;
        // {
        //     "statusCode": 200,
        //     "data": {
        //       "type": "درجة ادمان الانترنت",
        //       "score": 23,
        //       "desc": "مرتفعة"
        //     },
        //     "message": "Success",
        //     "success": true
        //   }



        // {
        //     "answers": [
        //       { "axis": "تقدير الذات العائلي", "answers": 4 },
        //       { "axis": "تقدير الذات المدرسي", "answers": 5 },
        //       { "axis": "تقدير الذات الرفاق", "answers": 3 },
        //     ]
        //   }
          

    case 'selfEsteem':
        res.status(200).send(new ApiResponse(200, calculateSelfEsteemResult(data)));
        return;

        // {
        //     "statusCode": 200,
        //     "data": [
        //       {
        //         "type": "تقدير الذات العائلي",
        //         "score": 6,
        //         "desc": "خارج النطاق"
        //       },
        //       {
        //         "type": "تقدير الذات المدرسي",
        //         "score": 9,
        //         "desc": "سمة غير معروفة"
        //       },
        //       {
        //         "type": "تقدير الذات الرفاق",
        //         "score": 8,
        //         "desc": "خارج النطاق"
        //       }
        //     ],
        //     "message": "Success",
        //     "success": true
        //   }





        

        // {
        //     "answers": [
        //       { "axis": "تقدير الذات العائلي", "answers": 4 },
        //       { "axis": "تقدير الذات المدرسي", "answers": 5 },
        //       { "axis": "تقدير الذات الرفاق", "answers": 3 },
        //       { "axis": "تقدير الذات العائلي", "answers": 2 },
        //       { "axis": "تقدير الذات المدرسي", "answers": 4 },
        //       { "axis": "تقدير الذات الرفاق", "answers": 5 }
        //     ]
        //   }
          


    case 'pression':
        res.status(200).send(new ApiResponse(200, calculatePressionResult(data)));
        return;


    // {
        //     "statusCode": 200,
        //     "data": {
        //       "type": "قياس الضغوط النفسيةالتيتواجهتالميذ الثانوي التأهيلي",
        //       "score": 23,
        //       "desc": "غائبة"
        //     },
        //     "message": "Success",
        //     "success": true
        //   }




        // {
        //     "answers": [
        //       { "axis": "تقدير الذات العائلي", "answers": 4 },
        //       { "axis": "تقدير الذات المدرسي", "answers": 5 },
        //       { "axis": "تقدير الذات الرفاق", "answers": 3 },
        //       { "axis": "تقدير الذات العائلي", "answers": 2 },
        //       { "axis": "تقدير الذات المدرسي", "answers": 4 },
        //       { "axis": "تقدير الذات الرفاق", "answers": 5 }
        //     ]
        //   }


    case 'examStress':
        res.status(200).send(new ApiResponse(200, calculateExamscore(data)));
        return;


        // {
        //     "statusCode": 200,
        //     "data": {
        //       "score": 23,
        //       "desc": "Not Happen",
        //       "type": "درجة قلق الامتحان"
        //     },
        //     "message": "Success",
        //     "success": true
        //   }






        // {
        //     "answers": [
        //       { "axis": "تقدير الذات العائلي", "answers": 4 },
        //       { "axis": "تقدير الذات المدرسي", "answers": 5 },
        //       { "axis": "تقدير الذات الرفاق", "answers": 3 },
        //       { "axis": "تقدير الذات العائلي", "answers": 2 },
        //       { "axis": "تقدير الذات المدرسي", "answers": 4 },
        //       { "axis": "تقدير الذات الرفاق", "answers": 5 }
        //     ]
        //   }

          

        
    case 'futureStress':
        res.status(200).send(new ApiResponse(200, calculateFutureStressResult(data)));
        return;



        // {
        //     "statusCode": 200,
        //     "data": {
        //       "score": 23,
        //       "desc": "غائبة",
        //       "type": "درجة قلق المستقبل"
        //     },
        //     "message": "Success",
        //     "success": true
        //   }




        // {
        //     "answers": [
        //       { "axis": "تقدير الذات العائلي", "answers": 4 },
        //       { "axis": "تقدير الذات المدرسي", "answers": 5 },
        //       { "axis": "تقدير الذات الرفاق", "answers": 3 },
        //       { "axis": "تقدير الذات العائلي", "answers": 2 },
        //       { "axis": "تقدير الذات المدرسي", "answers": 4 },
        //       { "axis": "تقدير الذات الرفاق", "answers": 5 }
        //     ]
        //   }
    


    case 'sincerAnxiaty':
        res.status(200).send(new ApiResponse(200, calculateSinceerAnxiatyResult(data)));
        return;


        // {
        //     "statusCode": 200,
        //     "data": {
        //       "type": "درجةالقلق",
        //       "score": 23,
        //       "desc": "متوسطة"
        //     },
        //     "message": "Success",
        //     "success": true
        //   }






        // {
        //     "answers": [
        //       { "axis": "1", "answers": ["R", "A", "S"] },
        //       { "axis": "2", "answers": ["I", "E", "C"] },
        //       { "axis": "3", "answers": ["A", "C", "R"] },
        //       { "axis": "4", "answers": ["S", "I", "E"] },
        //       { "axis": "5", "answers": ["C", "R", "A"] },
        //       { "axis": "6", "answers": ["E", "S", "I"] },
        //       { "axis": "7", "answers": ["R", "I", "C"] },
        //       { "axis": "8", "answers": ["A", "S", "E"] }
        //     ]
        //   }
          







    case 'raisec':
        const user = req.user;
        console.log(user)
        const exitingUser = await User.findOne({ _id: user.id});
        const result = calculerScore(data);
        exitingUser.riasec = result;
        exitingUser.save();
        res.status(200).send(new ApiResponse(200, result));
        return;

    

        // {
        //     "statusCode": 200,
        //     "data": {
        //       "R": 19,
        //       "A": 19,
        //       "I": 17,
        //       "S": 17,
        //       "E": 15,
        //       "C": 15
        //     },
        //     "message": "Success",
        //     "success": true
        //   }





        // {
        //     "answers": [
        //       { "axis": "العصابية", "answers": 3 },
        //       { "axis": "الانبساط", "answers": 5 },
        //       { "axis": "الانفتاح", "answers": 4 },
        //       { "axis": "الطيبة", "answers": 2 },
        //       { "axis": "الدقة والإتقان", "answers": 5 },
        //       { "axis": "العصابية", "answers": 1 },
        //       { "axis": "الانبساط", "answers": 4 },
        //       { "axis": "الانفتاح", "answers": 3 },
        //       { "axis": "الطيبة", "answers": 5 },
        //       { "axis": "الدقة والإتقان", "answers": 4 }
        //     ]
        //   }
          
          


    case 'ocean':
        res.status(200).send(new ApiResponse(200, calculateOceanResult(data)));
        return;


        // {
        //     "statusCode": 200,
        //     "data": [
        //       {
        //         "type": "العصابية",
        //         "score": 4,
        //         "desc": "خارج النطاق"
        //       },
        //       {
        //         "type": "الانبساط",
        //         "score": 9,
        //         "desc": "خارج النطاق"
        //       },
        //       {
        //         "type": "الانفتاح",
        //         "score": 7,
        //         "desc": "خارج النطاق"
        //       },
        //       {
        //         "type": "الطيبة",
        //         "score": 7,
        //         "desc": "خارج النطاق"
        //       },
        //       {
        //         "type": "الدقة والإتقان",
        //         "score": 9,
        //         "desc": "خارج النطاق"
        //       }
        //     ],
        //     "message": "Success",
        //     "success": true
        //   }





        // {
        //     "answers": [
        //       { "axis": "العصابية", "answers": 3 },
        //       { "axis": "الانبساط", "answers": 5 },
        //       { "axis": "الانفتاح", "answers": 4 },
        //       { "axis": "الطيبة", "answers": 2 },
        //       { "axis": "الدقة والإتقان", "answers": 5 },
        //       { "axis": "العصابية", "answers": 1 },
        //       { "axis": "الانبساط", "answers": 4 },
        //       { "axis": "الانفتاح", "answers": 3 },
        //       { "axis": "الطيبة", "answers": 5 },
        //       { "axis": "الدقة والإتقان", "answers": 4 }
        //     ]
        //   }
        

    case 'internetAdiction':
        res.status(200).send(new ApiResponse(200, calculateInternetAddictionResult(data)));
        return;



        // {
        //     "statusCode": 200,
        //     "data": {
        //       "type": "درجةادمان الانترنت",
        //       "score": 36,
        //       "desc": "غائبة"
        //     },
        //     "message": "Success",
        //     "success": true
        //   }