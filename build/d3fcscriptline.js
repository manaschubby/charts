// const data = fc.randomGeometricBrownianMotion().steps(1e4)(1);
console.log("lilnedata", data);
// var data = [
//     1, 1.0009844035569184, 0.9993527518402004, 0.9988114806107702,
//     0.9991449578446419, 0.999766596660088, 0.999029021788989, 0.9997845476274517,
//     0.9985087755457561, 0.9983812333428046, 0.9997118614161242,
//     0.9984760633778725, 0.9985101068367761, 0.9972633094000304,
//     0.9975347775689393, 0.9980333961911406, 0.9980918084170484,
//     0.9958052025564105, 0.9967542150136777, 0.9953480947686674,
//     0.9964739344817536, 0.9972743818602632, 0.997500855017252, 0.9976252926759975,
//     0.9959295811084303, 0.9961320581981217, 0.9978971786775265,
//     0.9986337769837041, 0.9982077465940215, 0.9995140803316734,
//     0.9998693930218171, 0.9998539917011893, 0.9986786302672809,
//     0.9975281929985176, 0.9983217690507157, 0.9987046379822612,
//     1.0004202479982383, 1.000856711543573, 1.0004369611042179, 0.9999778370432496,
//     0.9997756114066212, 0.9988335849947568, 0.99925584065031, 0.9971321410860294,
//     0.996431755470085, 0.9962453935481436, 0.9962411131526477, 0.9953296509265448,
//     0.9949805049343573, 0.9945110375947055, 0.9954707312296357,
//     0.9955329245162187, 0.9958830735214788, 0.9948654148656718,
//     0.9963437204650641, 0.9966875110562331, 0.9969293660919949,
//     0.9954134825820824, 0.9943317217154656, 0.9949441237692851,
//     0.9968215785529919, 0.9964644709014737, 0.996455174768326, 0.9969967821183066,
//     0.9966664834575861, 0.9982628687665844, 0.9985095783778385,
//     1.0000060570178122, 0.9993192746077186, 0.9989007445026428,
//     1.0001930221651263, 0.9995344331968403, 0.998919610777971, 1.0005597428691988,
//     1.0008045850485479, 1.0013602485975879, 1.0023170895211653,
//     1.0027368491688373, 1.0027478252923216, 1.0033022302742123, 1.002622430407665,
//     1.001686227473505, 1.0003072951314254, 0.999926506517383, 0.998231361767151,
//     0.9990551039848901, 0.9981384740619476, 0.996596962451939, 0.9961468831176402,
//     0.9972491338928586, 0.9983353124360375, 0.9967552112688284,
//     0.9980590405153217, 0.9969061065553642, 0.9981740347427637,
//     0.9998616684676417, 0.9991351264935622, 0.9994422978396249,
//     0.9994991841707705, 0.9990561450219912, 0.9975308801477292,
//     0.9975006187044615, 0.9983076770472021, 0.9984911216841483,
//     0.9977760986321925, 0.9983883941605028, 0.9979398781429687,
//     1.0003262216598123, 0.9996686005654579, 0.9984820140513873,
//     0.9981696221750674, 0.9985816636932687, 0.9985690691408485,
//     0.9988660291963559, 0.9985050447332968, 0.9981833611875822,
//     0.9989270421035071, 0.9966883275589796, 0.996419304501396, 0.9965396211942303,
//     0.9967078640947483, 0.9942220700322965, 0.9943353940173691,
//     0.9937242272692834, 0.9933830768439734, 0.9921202116865308,
//     0.9936155964619248, 0.9942510056363372, 0.9936622707589982,
//     0.9939553620276733, 0.9934892230051147, 0.9941848065539506,
//     0.9957504882688988, 0.9953350952109518, 0.995437250558626, 0.995643663360097,
//     0.9943049041216047, 0.9942936258277607, 0.995482458923185, 0.9964447193838953,
//     0.9951074683325266, 0.9958312152118661, 0.9954470539048322,
//     0.9949658237585068, 0.9957309325157742, 0.9938575953105905,
//     0.9953892455620379, 0.9957691876066029, 0.9935637417794145,
//     0.9953281721055559, 0.9971739674691725, 0.9969853098613859,
//     0.9970123572557186, 0.9967633780804108, 0.9988536654709024,
//     0.9982632301055879, 0.9994711323723531, 0.9967969534501725,
//     0.9949649359710685, 0.9958883613748454, 0.9956133002392967,
//     0.9949022208472285, 0.9937693924921893, 0.9928651819334665,
//     0.9932124138363387, 0.9937348085183461, 0.9949022646974268,
//     0.9941428518726813, 0.9952489693564001, 0.9940268079163854,
//     0.9935363348356383, 0.9932606364342252, 0.9928932430904032,
//     0.9923267676067564, 0.9906845439302553, 0.9909599959915733,
//     0.9946687365133691, 0.9955016664152543, 0.9952065059641809,
//     0.9942840120493531, 0.9934896771092172, 0.9934146029043089,
//     0.9937729086063347, 0.993426197301389, 0.9927891410773455, 0.9925159569529082,
//     0.9923983050390935, 0.9923018863694162, 0.9931910137190967,
//     0.9922399368350278, 0.9917158316608679, 0.9916037680274148, 0.991901899178496,
//     0.990994488294296, 0.9894716942139797, 0.9882124086059415, 0.9892805901922042,
//     0.9875883989495945, 0.9868582994384382, 0.9872854747237628,
//     0.9873637748360845, 0.9864532528251405, 0.9861536487740268,
//     0.9862885908060389, 0.9875710026008917, 0.9854932428113118,
//     0.9852486835813796, 0.9865592375089892, 0.9876857611956579,
//     0.9864602275392185, 0.9880885814622082, 0.9868295255479134,
//     0.9856855134023155, 0.9841001946092263, 0.9839998866238815,
//     0.9825398067808511, 0.9818667151657282, 0.9820477240351422,
//     0.9819442258708599, 0.9828422386368196, 0.9828290813118821,
//     0.9829879016750299, 0.9821293915718677, 0.9828241583616809,
//     0.9831393325641291, 0.983005096739789, 0.9808817252506927, 0.9806975588181475,
//     0.9807028545498975, 0.9821523087026649, 0.980990891735944, 0.9820356716573333,
//     0.9831694097568491, 0.9841560504806208, 0.9853896591450823,
//     0.9868131433580867, 0.9854270045371857, 0.9862790021102255,
//     0.9865916131175236, 0.9870885482863241, 0.987458216889978, 0.9873030883180798,
//     0.9873683688903833, 0.9885187108964172, 0.9879323352567797,
//     0.9879738120919427, 0.9887694526064131, 0.9877297301426858, 0.987096519351873,
//     0.9882955934365321, 0.9893230485179035, 0.9892601635098213,
//     0.9891930598057839, 0.9896494250843323, 0.9900866538370147,
//     0.9906084804224037, 0.992888389758788, 0.9918936235109157, 0.9926774269469644,
//     0.9916586849290457, 0.9907747616775835, 0.9910541191043618,
//     0.9906533608461595, 0.9892588743742026, 0.9898304235088524,
//     0.9908252452218825, 0.9921486634140779, 0.9915172069129091,
//     0.9916662842343502, 0.9909611393191889, 0.9902665638832181,
//     0.9898870877048841, 0.9904844594430324, 0.9898230004128596,
//     0.9891925789609718, 0.9890689743680026, 0.9887346800122871,
//     0.9904662397412887, 0.9888575282829625, 0.9884329025232714,
//     0.9883916559641099, 0.9891951329896994, 0.9887746137798636,
//     0.9887202416770966, 0.9900765596503629, 0.9879019724288279,
//     0.9883208732952115, 0.9878185883154766, 0.9867158251010915,
//     0.9857098614570786, 0.9856003380248588, 0.9871939599188249,
//     0.9882542533158917, 0.9887188138136588, 0.9894150270327298,
//     0.9899085782087422, 0.9894270722626932, 0.9880083723199058,
//     0.9863020108475467, 0.9857121241079633, 0.9845888104974789,
//     0.9851359978629279, 0.985506946784211, 0.9856495876058283, 0.9860336270433122,
//     0.9863083579269998, 0.986253796284859, 0.9858812899992756, 0.9861799575538959,
//     0.9863649318267382, 0.9882546758798765, 0.9875616251417921,
//     0.9852535345234288, 0.986252991250152, 0.9869478504886834, 0.987791629813478,
//     0.9868611780032612, 0.9875626556612928, 0.9877591247000606,
//     0.9887012912218666, 0.989738730913471, 0.9891263054514214, 0.9886834799050271,
//     0.9890543864434683, 0.9891129427078066, 0.989723505088164, 0.9892934688316148,
//     0.9887974440472049, 0.9887583411748623, 0.988947276866935, 0.9882494236606819,
//     0.9892085242513409, 0.9885921048590581, 0.9886671394134795,
//     0.9892343198518904, 0.988404128706049, 0.9879945303533947, 0.9889617847870208,
//     0.9891105531020764, 0.9883313249116589, 0.9867630467526898,
//     0.9865259246913402, 0.9863389741804197, 0.9856633133184195,
//     0.9859607314953911, 0.986100279930101, 0.9867754045458061, 0.9873847591468897,
//     0.9882858390787658, 0.9884645090341855, 0.9882800629174517,
//     0.9909677823270079, 0.9900281039581984, 0.9908463487455781,
//     0.9911530433057388, 0.9896679845033971, 0.9899740608513331, 0.990716071522281,
//     0.9897927346606716, 0.9896713367641378, 0.9917357652422026,
//     0.9914754977900145, 0.9916711867647239, 0.9926113590904118,
//     0.9934250942992139, 0.9931346103306125, 0.9918326118536825,
//     0.9913500054607894, 0.9899189157593777, 0.9919378875906956,
//     0.9917084405513076, 0.9905700883615874, 0.9897799723460069, 0.989536707310143,
//     0.9897654377722698, 0.9889748816672997, 0.988767742920313, 0.9890722112004678,
//     0.9909550890710987, 0.9910488274513435, 0.9912040774448638, 0.990095745538226,
//     0.9891408784744072, 0.989299752383932, 0.9886280015451835, 0.9897111008896257,
//     0.9903548023220228, 0.9912680771560463, 0.990072828719542, 0.9902916684544005,
//     0.9900056192543585, 0.9889231830472602, 0.9893199292201043,
//     0.9909601588232088, 0.991124067335085, 0.9902237927975318, 0.9896087252547083,
//     0.9885930141928331, 0.9880631476979925, 0.9865669120405928,
//     0.9877776010973152, 0.9872534901760848, 0.9855280635968907, 0.985040995432029,
//     0.9862803778720542, 0.9861772829721456, 0.9873536012094616,
//     0.9872536716420285, 0.9864521353061244, 0.985985485892766, 0.9851551369617898,
//     0.9866877651111401, 0.9877620663337229, 0.9872695738638747,
//     0.9881248586558196, 0.9873026774653549, 0.9887537247336252,
//     0.9888087159790105, 0.9890844300364572, 0.9877537077262022,
//     0.9876849052630315, 0.9889809661605704, 0.9893374912280932,
//     0.9893666791978104, 0.9889063981328834, 0.9878677109919283,
//     0.9872100854917646, 0.9881008174575476, 0.987479186905252, 0.9887839900161012,
//     0.9892035835121338, 0.9879086607548537, 0.9876122830273302,
//     0.9881404769820855, 0.988091853915722, 0.9885303114620586, 0.9903004979455798,
//     0.9895157516767831, 0.9889912950445474, 0.9880762516876461,
//     0.9884148952636007, 0.9894382359723326, 0.9889401019765036,
//     0.9881992223893282, 0.9875300631380823, 0.988311613285376, 0.9874615540933063,
//     0.9861180001475262, 0.9866665762512892, 0.9865717941990758,
//     0.9852649000282125, 0.986145061626465, 0.9866010995111818, 0.9865342981653548,
//     0.9865718218230853, 0.9859200205355226, 0.9869257547656679, 0.985479531866648,
//     0.9865579963317758, 0.987072984841687, 0.9875016399590806, 0.9890107842062433,
//     0.9891283537463985, 0.98889005516796, 0.9879911154215768, 0.9877312717355952,
//     0.9873730028591751, 0.9878584169101013, 0.988571220257305, 0.9880032981083785,
//     0.9880357288002357, 0.987584090409336, 0.9866072691843076, 0.9857673079926327,
//     0.9858929018818746, 0.9870151889930303, 0.9866931556492723,
//     0.9874613740168412, 0.9868484593392299, 0.9850204248393432,
//     0.9852007483268009, 0.9848865156018348, 0.9847237743886982, 0.983141697940978,
//     0.9841585262076435, 0.982333359468247, 0.9828469893930526, 0.9829866748869933,
//     0.981881815279343, 0.9830979840388447, 0.9833557537634594, 0.9819137688152632,
//     0.9823647150093675, 0.9831807602830547, 0.9835836911607762,
//     0.9824791654706448, 0.9838974238126064, 0.984529167423674, 0.9854837250590937,
//     0.9857683817067199, 0.983286727225154, 0.9836426356903113, 0.9833202949437202,
//     0.9850042839665567, 0.9844063097509856, 0.9848557228281616,
//     0.9855355033539034, 0.9848761315273373, 0.9853558721635349,
//     0.9842833208905494, 0.9850634613013504, 0.9856629161656473,
//     0.9853001679170047, 0.9859902641135002, 0.985646970832915, 0.9870937562083989,
//     0.9869103874274824, 0.9866859638892941, 0.9871089754822592,
//     0.9850800557280791, 0.9841673161602992, 0.9828441918078308,
//     0.9830802125405272, 0.9831203363838746, 0.9826573975085575,
//     0.9822414589288464, 0.9836594405306016, 0.9848448366531787,
//     0.9849558732624282, 0.9839034561250213, 0.9825011587481052,
//     0.9832434414888289, 0.9830607987888027, 0.9846347085132084,
//     0.9850110941320206, 0.9856754692845002, 0.9846806808011482,
//     0.9853719406514135, 0.9865882476203678, 0.9880079128580095,
//     0.9867153809299891, 0.9858539421484331, 0.9851142806630961, 0.985340131010491,
//     0.9857650754902877, 0.9870305722638406, 0.9872834513912976,
//     0.9864616408966781, 0.9862297634864662, 0.9875494987000897,
//     0.9889622920113504, 0.9878048485385177, 0.9879212949414163, 0.987915506427097,
//     0.9858562840398026, 0.985306881523167, 0.9849873333420126, 0.9861038479907045,
//     0.9859456867068426, 0.9872234889351486, 0.9868488178793502,
//     0.9864571531823721, 0.9872025043386919, 0.9870902507034989,
//     0.9857712587096088, 0.9852961526596342, 0.9863582720528227, 0.985595674375647,
//     0.9853873553638574, 0.9862052584445894, 0.9848489794845597,
//     0.9850778583858791, 0.9854304999947731, 0.98468552617708, 0.9848151627758047,
//     0.9860417570460962, 0.9868200763140913, 0.986751693741222, 0.9860622800909804,
//     0.9860156969838966, 0.9877417480609294, 0.9880402824178225,
//     0.9879552052661257, 0.988889613633367, 0.9883795723097976, 0.9885813155720352,
//     0.9897878013590655, 0.9903712947936302, 0.9897554212271937,
//     0.9895450170764674, 0.9887550594229559, 0.9890104624591822,
//     0.9903156944231454, 0.9913125722184088, 0.9916785357380666,
//     0.9921227098895413, 0.9914722267727778, 0.9918008935257984,
//     0.9921250557560015, 0.9934074013660219, 0.9951188953102391,
//     0.9941962690215053, 0.9924607075642904, 0.9923847624580934,
//     0.9928516919736602, 0.9950537696387828, 0.9941301803764174,
//     0.9954770642581325, 0.9957727689123556, 0.9954434688878782,
//     0.9955244242613935, 0.9970785628264279, 0.9970546964387667,
//     0.9960031369050083, 0.9964120033717065, 0.9980769462146176,
//     0.9982760422616441, 0.9992975357237944, 0.9996732048071328,
//     0.9983973062435872, 0.9978157865588534, 1.0005650623145446, 1.000849565470478,
//     1.0018713733231557, 1.0005568782940994, 1.0014136061872956,
//     1.0033419764433607, 1.0032052424708924, 1.003583145259734, 1.004066849572761,
//     1.0032118889856707, 1.0010474695767235, 1.0014494860803433,
//     1.0008133912689403, 1.00148738176598, 0.9995980579059977, 1.0002057733733378,
//     1.0020028667731042, 1.0029729031007775, 1.0019091118158476, 1.003499198948728,
//     1.0026963891324756, 1.0031834112141842, 1.0024362956022972,
//     1.0025345360043072, 1.002928142345013, 1.0022419555189395, 1.0027693007834984,
//     1.0032342572936481, 1.0034663764828804, 1.0032133530536793,
//     1.0032465929837406, 1.003832061868119, 1.004477602462661, 1.0050418942105122,
//     1.0028447199250001, 1.0048889367406575, 1.0049230706733567,
//     1.0045204107555967, 1.0038660609790817, 1.0053076982918747,
//     1.0055681826612135, 1.0054665702986916, 1.0086975466878854, 1.007943780581217,
//     1.0080748591789568, 1.0083973476514736, 1.009549103364429, 1.008893748076294,
//     1.0077699072973585, 1.0085196153258418, 1.0102031680700605,
//     1.0086409026926149, 1.0102443353235204, 1.011603076442672, 1.0118556405798766,
//     1.0132991549360841, 1.0153880409348555, 1.0166987837261352,
//     1.0175484751252188, 1.017333715150006, 1.016226499553478, 1.0140792389973488,
//     1.0138034297531213, 1.0145946543325786, 1.0138957143825038,
//     1.0137322055126516, 1.0141843348578152, 1.0133784248207138, 1.014728118313236,
//     1.015476781754349, 1.0158993152283569, 1.0157053731694858, 1.0146471258185965,
//     1.0152435380834919, 1.015326372440474, 1.0142734688624728, 1.0140489303902132,
//     1.0125616633848165, 1.0115941738579792, 1.011614383916993, 1.012336802901778,
//     1.0122725357596258, 1.012494325791473, 1.0125446421422963, 1.0134654536938796,
//     1.0130975578287833, 1.0129055851793698, 1.0126539544863171,
//     1.0139063003706432, 1.014032315676128, 1.013015818293

//   ];

var data = [120, 20, 30];

const extent = fc.extentLinear();

const xScale = d3.scaleLinear().domain([0, data.length - 1]);

const yScale = d3.scaleLinear().domain(extent(data));

const container = document.querySelector("d3fc-canvas");

const series = fc
    .seriesWebglLine()
    .xScale(xScale)
    .yScale(yScale)
    .crossValue((_, i) => i)
    .mainValue((d) => d)
    .lineWidth(4)
    .defined(() => true)
    .equals((previousData) => previousData.length > 0)
    .decorate((program, index) => {
        fc
            .webglStrokeColor()
            .value(() => {
                // const { r, g, b, opacity } = "red";
                return [122 / 145, 2 / 255, 3 / 255, 1];
            })
            .data(data)(program);
    });

let pixels = null;
let frame = 0;
let gl = null;

d3.select(container)
    // .on("click", () => {
    //     const domain = xScale.domain();
    //     const max = Math.round(domain[1] / 2);
    //     xScale.domain([0, max]);
    //     container.requestRedraw();
    // })
    .on("measure", (event) => {
        const { width, height } = event.detail;
        xScale.range([0, width]);
        yScale.range([height, 0]);

        gl = container.querySelector("canvas").getContext("webgl");
        series.context(gl);
    })
    .on("draw", () => {
        if (pixels == null) {
            pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
        }
        performance.mark(`draw-start-${frame}`);
        series(data);
        // Force GPU to complete rendering to allow accurate performance measurements to be taken
        gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        performance.measure(`draw-duration-${frame}`, `draw-start-${frame}`);
        frame++;
    });

container.requestRedraw();
