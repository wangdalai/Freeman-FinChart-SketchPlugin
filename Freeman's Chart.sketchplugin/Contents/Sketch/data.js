var indexDate = 0;
var indexHigh = 2;
var indexOpen = 1;
var indexLow = 3;
var indexClose = 4;
var indexVolume = 5;

var data = [
	["2016-12-20",16.56,16.65,16.47,16.62,121552],
	["2016-12-21",16.66,16.93,16.66,16.79,228834],
	["2016-12-22",16.79,16.82,16.6,16.7,96251],
	["2016-12-23",16.7,16.73,16.48,16.54,105925],
	["2016-12-26",16.43,16.74,16.25,16.67,112587],
	["2016-12-27",16.65,16.69,16.52,16.6,82952],
	["2016-12-28",16.53,16.58,16.39,16.45,122808],
	["2016-12-29",16.45,16.47,16.23,16.27,185072],
	["2016-12-30",16.28,16.37,16.15,16.33,200340],
	["2017-01-03",16.31,16.65,16.3,16.5,235941],
	["2017-01-04",16.51,16.66,16.47,16.65,148794],
	["2017-01-05",16.68,16.68,16.59,16.61,93893],
	["2017-01-06",16.63,16.65,16.48,16.49,91413],
	["2017-01-09",16.47,16.59,16.43,16.47,91631],
	["2017-01-10",16.47,16.54,16.4,16.49,64235],
	["2017-01-11",16.43,16.52,16.31,16.32,103259],
	["2017-01-12",16.3,16.42,16.25,16.29,86291],
	["2017-01-13",16.24,16.45,16.2,16.38,99548],
	["2017-01-16",16.24,16.7,16.07,16.64,395580],
	["2017-01-17",16.5,16.59,16.37,16.52,75736],
	["2017-01-18",16.53,16.72,16.44,16.55,87832],
	["2017-01-19",16.55,16.71,16.51,16.59,82386],
	["2017-01-20",16.63,16.84,16.61,16.74,116089],
	["2017-01-23",16.74,16.88,16.7,16.79,92756],
	["2017-01-24",16.75,16.76,16.66,16.69,64988],
	["2017-01-25",16.7,16.77,16.6,16.67,77251],
	["2017-01-26",16.7,16.85,16.69,16.76,71985],
	["2017-02-03",16.76,16.85,16.47,16.53,69537],
	["2017-02-06",16.5,16.58,16.43,16.53,62065],
	["2017-02-07",16.49,16.52,16.38,16.46,76934],
	["2017-02-08",16.45,16.82,16.42,16.81,152084],
	["2017-02-09",16.75,16.92,16.7,16.82,142378],
	["2017-02-10",16.8,16.98,16.75,16.88,158215],
	["2017-02-13",16.87,17.09,16.81,16.98,172444],
	["2017-02-14",17,17.04,16.83,16.89,100493],
	["2017-02-15",17.07,17.08,16.75,16.82,146158],
	["2017-02-16",16.76,17.08,16.7,16.95,115130],
	["2017-02-17",17.03,17.44,16.94,16.96,262672],
	["2017-02-20",16.95,17.15,16.87,17.11,151666],
	["2017-02-21",17.13,17.32,17.09,17.15,165412],
	["2017-02-22",17.16,17.2,16.95,17.06,120974],
	["2017-02-23",17.1,17.11,16.83,16.89,164992],
	["2017-02-24",16.86,17,16.85,16.99,86923],
	["2017-02-27",17,17,16.73,16.77,111320],
	["2017-02-28",16.76,16.88,16.76,16.83,64498],
	["2017-03-01",16.84,16.93,16.76,16.78,113770],
	["2017-03-02",16.83,16.98,16.76,16.8,175738],
	["2017-03-03",16.72,16.8,16.61,16.78,116247],
	["2017-03-06",16.72,16.85,16.68,16.82,116470],
	["2017-03-07",16.78,16.84,16.71,16.77,65636],
	["2017-03-08",16.77,16.81,16.67,16.69,58812],
	["2017-03-09",16.69,16.73,16.51,16.69,116093],
	["2017-03-10",16.69,16.7,16.6,16.63,73033],
	["2017-03-13",16.62,16.73,16.51,16.7,94078],
	["2017-03-14",16.68,16.74,16.64,16.65,73969],
	["2017-03-15",16.64,16.72,16.61,16.68,82871],
	["2017-03-16",16.75,17.1,16.72,16.99,281895],
	["2017-03-17",17.03,17.05,16.71,16.76,137566],
	["2017-03-20",16.78,16.79,16.55,16.71,113275],
	["2017-03-21",16.73,16.75,16.56,16.59,120074],
	["2017-03-22",16.54,16.6,16.47,16.48,110425],
	["2017-03-23",16.48,16.6,16.38,16.42,125350],
	["2017-03-24",16.41,16.66,16.37,16.59,121490],
	["2017-03-27",16.59,16.71,16.5,16.58,72454],
	["2017-03-28",16.6,16.66,16.42,16.44,65477],
	["2017-03-29",16.43,16.56,16.37,16.38,83715],
	["2017-03-30",16.38,16.43,16.23,16.37,134378],
	["2017-03-31",16.37,16.39,16.24,16.27,68434],
	["2017-04-05",16.27,16.56,16.26,16.47,121926],
	["2017-04-06",16.5,16.52,16.4,16.48,88039],
	["2017-04-07",16.5,16.51,16.39,16.47,132788],
	["2017-04-10",16.47,16.54,16.42,16.48,117988],
	["2017-04-11",16.38,16.48,16.24,16.45,107012],
	["2017-04-12",16.47,16.67,16.33,16.57,155492],
	["2017-04-13",16.5,16.57,16.41,16.46,65096],
	["2017-04-14",16.43,16.51,16.27,16.4,84678],
	["2017-04-17",16.35,16.48,16.25,16.46,75753],
	["2017-04-18",16.46,16.46,16.04,16.05,125689],
	["2017-04-19",16.05,16.05,15.66,15.98,161601],
	["2017-04-20",15.86,15.97,15.78,15.96,125244],
	["2017-04-21",16,16.16,15.87,16.13,95276],
	["2017-04-24",16.1,16.26,15.91,16.23,137735],
	["2017-04-25",16.17,16.17,16.01,16.04,59745],
	["2017-04-26",16.06,16.24,16.03,16.08,66745],
	["2017-04-27",16.1,16.1,15.79,15.94,100837],
	["2017-04-28",15.89,15.96,15.83,15.94,64855],
	["2017-05-02",15.89,15.97,15.78,15.85,62964],
	["2017-05-03",15.86,15.9,15.7,15.83,104466],
	["2017-05-04",15.83,15.87,15.69,15.8,82554],
	["2017-05-05",15.73,15.85,15.57,15.82,181905],
	["2017-05-08",15.79,15.93,15.71,15.92,124663],
	["2017-05-09",15.83,15.9,15.75,15.81,46471],
	["2017-05-10",15.83,15.83,15.72,15.81,67505],
	["2017-05-11",15.7,15.97,15.69,15.94,158020],
	["2017-05-12",15.95,16.19,15.9,15.97,86142],
	["2017-05-15",16.08,16.25,15.93,16.19,116414],
	["2017-05-16",16.18,16.22,15.99,16.2,96994],
	["2017-05-17",16.2,16.29,16.1,16.11,76398],
	["2017-05-18",16.03,16.15,15.98,16.1,81484],
	["2017-05-19",16.08,16.15,15.97,16.03,46813],
	["2017-05-22",16,16.16,15.77,16.13,114239],
	["2017-05-23",16.03,16.34,15.96,16.3,178677],
	["2017-05-24",16.18,16.39,16.15,16.38,96757],
	["2017-05-25",16.32,16.9,16.27,16.8,277205],
	["2017-05-26",16.7,16.88,16.63,16.8,155616],
	["2017-05-31",16.85,17.03,16.7,17,249381],
	["2017-06-01",16.94,17.17,16.8,17.15,359960],
	["2017-06-02",17.15,17.19,16.9,16.9,141342],
	["2017-06-05",16.81,16.9,16.72,16.85,86757],
	["2017-06-06",16.82,16.97,16.79,16.86,70886],
	["2017-06-07",16.93,17.03,16.82,17.02,125092],
	["2017-06-08",17.02,17.07,16.91,16.98,73658],
	["2017-06-09",17,17.1,16.65,16.9,205118],
	["2017-06-12",16.72,16.89,16.6,16.72,141583],
	["2017-06-13",16.69,16.86,16.58,16.73,82000],
	["2017-06-14",16.74,16.9,16.63,16.81,84735],
	["2017-06-15",16.73,16.92,16.71,16.85,76948],
	["2017-06-16",16.89,16.91,16.76,16.79,95864],
	["2017-06-19",16.72,17.08,16.72,17.05,125041],
	["2017-06-20",17.06,17.12,17,17.1,123972],
	["2017-06-21",17.3,17.38,16.93,17.01,138686],
	["2017-06-22",17.05,17.26,16.91,17.09,197045],
	["2017-06-23",16.96,17.2,16.76,17.16,143981],
	["2017-06-26",17.12,17.37,17.12,17.24,187490],
	["2017-06-27",17.25,17.3,17.11,17.19,84190],
	["2017-06-28",17.19,17.29,17.07,17.16,87498],
	["2017-06-29",17.11,17.18,17.02,17.05,71141],
	["2017-06-30",17.02,17.25,16.88,17.22,119478],
	["2017-07-03",17.22,17.25,16.99,17.15,99367],
	["2017-07-04",17.12,17.14,16.89,16.94,127527],
	["2017-07-05",16.93,17.02,16.9,17,89362],
	["2017-07-06",17.02,17.04,16.78,16.96,109820],
	["2017-07-07",16.9,17.33,16.8,17.27,168662],
	["2017-07-10",17.26,17.59,17.18,17.28,250743],
	["2017-07-11",17.27,17.56,17.21,17.37,221793],
	["2017-07-12",17.37,17.48,17.09,17.17,189711],
	["2017-07-13",17.18,17.75,17.15,17.72,424164],
	["2017-07-14",17.74,17.91,17.59,17.82,332402],
	["2017-07-17",18,18.09,17.31,17.38,397326],
	["2017-07-18",17.35,17.44,16.89,17.1,254189],
	["2017-07-19",16.98,18.25,16.93,18.22,537289],
	["2017-07-20",18.18,18.28,17.96,18.1,325267],
	["2017-07-21",17.91,17.97,17.68,17.8,170249],
	["2017-07-24",17.71,17.94,17.66,17.68,178430],
	["2017-07-25",17.63,17.81,17.53,17.57,113166],
	["2017-07-26",17.54,17.79,17.47,17.74,166932],
	["2017-07-27",17.74,17.91,17.35,17.86,208922],
	["2017-07-28",17.78,17.85,17.53,17.54,113743],
	["2017-07-31",17.5,18.15,17.45,17.91,282831],
	["2017-08-01",17.9,18.22,17.8,18.01,276376],
	["2017-08-02",18,18.26,17.81,18.2,380758],
	["2017-08-03",18.17,18.45,18.03,18.08,282726],
	["2017-08-04",18,18.58,17.94,18.24,291307],
	["2017-08-07",18.27,18.54,17.95,18.09,229247],
	["2017-08-08",18.11,18.38,17.86,18.24,214370],
	["2017-08-09",18.37,18.37,17.9,17.94,180951],
	["2017-08-10",17.86,18.24,17.85,18.11,206911],
	["2017-08-11",17.94,18.02,17.51,17.57,264650],
	["2017-08-14",17.55,17.92,17.46,17.79,244486],
	["2017-08-15",17.79,17.98,17.72,17.91,175516],
	["2017-08-16",17.81,17.92,17.73,17.79,92929],
	["2017-08-17",17.78,18.14,17.66,18.09,182771],
	["2017-08-18",18.01,18.15,17.81,17.83,146143],
	["2017-08-21",17.8,17.94,17.74,17.9,87550],
	["2017-08-22",17.91,18.06,17.75,17.84,100640],
	["2017-08-23",17.84,18.13,17.77,17.89,153025],
	["2017-08-24",17.9,17.92,17.58,17.61,109027],
	["2017-08-25",17.62,18.21,17.6,18.15,356756],
	["2017-08-28",18.45,19.52,18.4,19.5,788103],
	["2017-08-29",19.47,19.49,19.09,19.22,353818],
	["2017-08-30",19.18,19.95,19.18,19.39,446319],
	["2017-08-31",19.44,19.87,19.18,19.54,309538],
	["2017-09-01",19.55,20.08,19.55,19.69,453055],
	["2017-09-04",19.75,19.93,19.35,19.86,285485],
	["2017-09-05",19.86,19.99,19.5,19.6,293761],
	["2017-09-06",19.52,19.68,19.31,19.58,183080],
	["2017-09-07",19.6,20.2,19.6,19.76,390251],
	["2017-09-08",19.68,19.84,19.44,19.58,200316],
	["2017-09-11",19.48,20.07,19.3,19.69,261434],
	["2017-09-12",19.8,21.15,19.8,20.7,575730],
	["2017-09-13",20.68,20.68,20.15,20.42,352451],
	["2017-09-14",20.32,21,20.22,20.38,375625],
	["2017-09-15",20.22,20.68,20,20.39,283802],
	["2017-09-18",20.39,20.81,20.3,20.44,302418],
	["2017-09-19",20.5,20.65,20.04,20.15,230929],
	["2017-09-20",20.2,20.33,19.92,20.16,200748],
	["2017-09-21",20.14,20.65,20.08,20.18,232567],
	["2017-09-22",20.05,20.39,19.9,20.37,231185],
	["2017-09-25",20.27,20.58,20.15,20.57,249113],
	["2017-09-26",20.5,20.86,20.39,20.59,172380],
	["2017-09-27",20.55,21.05,20.48,20.93,249758],
	["2017-09-28",20.7,20.94,20.56,20.74,159172],
	["2017-09-29",20.76,21.68,20.74,21.39,353393],
	["2017-10-09",21.81,22.35,21.05,21.07,443675],
	["2017-10-10",21.11,21.36,20.56,20.88,341707],
	["2017-10-11",20.79,20.96,20.58,20.71,190057],
	["2017-10-12",20.77,20.82,20.35,20.54,194889],
	["2017-10-13",20.54,20.62,20.18,20.26,250304],
	["2017-10-16",20.26,20.42,20.11,20.22,204710],
	["2017-10-17",20.2,20.37,20.1,20.18,165156],
	["2017-10-18",20.23,20.55,20.18,20.5,247434],
	["2017-10-19",20.37,20.47,19.55,20.03,356382],
	["2017-10-20",19.84,19.99,19.7,19.76,113679],
	["2017-10-23",19.78,19.82,19.35,19.44,151956],
	["2017-10-24",19.44,19.76,19.4,19.73,159664],
	["2017-10-25",19.72,19.84,19.52,19.71,96685],
	["2017-10-26",19.7,19.99,19.46,19.77,210016],
	["2017-10-27",19.7,19.93,19.67,19.91,145195],
	["2017-10-30",19.89,19.89,18.45,18.94,437308],
	["2017-10-31",18.71,18.87,18.52,18.67,159266],
	["2017-11-01",18.7,18.94,18.29,18.37,235415],
	["2017-11-02",18.42,18.66,18.09,18.42,227480],
	["2017-11-03",18.38,18.53,18.07,18.49,187997],
	["2017-11-06",18.38,18.5,18.14,18.28,182552],
	["2017-11-07",18.23,18.75,18.23,18.54,292599],
	["2017-11-08",18.56,19.69,18.42,19.13,465236],
	["2017-11-09",18.92,19.48,18.9,19.47,291901],
	["2017-11-10",19.4,19.78,19.15,19.46,268271],
	["2017-11-13",19.5,19.89,19.32,19.35,283877],
	["2017-11-14",19.42,19.52,18.79,19.05,235432],
	["2017-11-15",18.9,19.25,18.75,18.96,175867],
	["2017-11-16",18.86,19,18.5,18.6,171105],
	["2017-11-17",18.59,19.3,18.43,19.27,383676],
	["2017-11-20",19.05,19.05,18.56,18.85,252620],
	["2017-11-21",18.79,20.44,18.7,19.87,894485],
	["2017-11-22",19.84,20.29,19.75,20.01,501715],
	["2017-11-23",19.92,20.44,19.17,19.48,455031],
	["2017-11-24",19.31,19.57,19,19.54,295316],
	["2017-11-27",19.4,19.72,19.1,19.57,308732],
	["2017-11-28",19.38,19.55,19,19.27,203904],
	["2017-11-29",19.28,19.28,18.75,19.13,264636],
	["2017-11-30",18.98,19.65,18.82,19.14,256859],
	["2017-12-01",19.05,19.19,18.8,18.94,195144],
	["2017-12-04",18.87,18.87,18.45,18.67,219086],
	["2017-12-05",18.67,19.24,18.53,19.17,355319],
	["2017-12-06",19.14,19.22,18.85,19.18,180574],
	["2017-12-07",19.03,19.08,18.77,18.94,156609],
	["2017-12-08",18.83,18.98,18.61,18.69,156806],
	["2017-12-11",18.65,18.74,18.48,18.6,170969],
	["2017-12-12",18.66,18.66,18.11,18.14,173949],
	["2017-12-13",18.1,18.25,17.97,18.07,152092],
	["2017-12-14",18.15,18.15,17.69,17.86,169046],
	["2017-12-15",17.77,17.84,17.59,17.65,155688],
	["2017-12-18",17.68,17.78,17.45,17.57,137557],
	["2017-12-19",17.61,17.8,17.57,17.66,129619],
	["2017-12-20",17.66,17.69,17.27,17.44,211318],
	["2017-12-21",17.4,17.71,17.23,17.51,247713],
	["2017-12-22",17.49,17.65,17.36,17.38,153727],
	["2017-12-25",17.35,17.47,16.97,16.99,191778],
	["2017-12-26",17.01,17.24,16.91,17.14,144539],
	["2017-12-27",17.19,17.19,16.73,16.93,184195],
	["2017-12-28",16.91,17.23,16.82,16.97,168306],
	["2017-12-29",17.03,17.2,16.96,17.16,141371],
	["2018-01-02",17.18,17.65,17.05,17.54,269909],
	["2018-01-03",17.5,17.96,17.43,17.82,269747],
	["2018-01-04",17.79,17.96,17.65,17.81,138699],
	["2018-01-05",17.8,17.99,17.67,17.82,157019],
	["2018-01-08",17.74,18.74,17.73,18.55,404504],
	["2018-01-09",18.55,18.64,18.16,18.22,219849],
	["2018-01-10",18.28,18.48,17.98,18.16,217179],
	["2018-01-11",18.01,18.23,17.86,18.11,123882],
	["2018-01-12",18.05,18.49,17.98,18.05,166899],
	["2018-01-15",18.05,18.15,17.7,17.73,183750],
	["2018-01-16",17.65,18.05,17.38,18.01,315944],
	["2018-01-17",18.09,19.16,18.08,18.52,644421],
	["2018-01-18",18.56,19.01,18.42,18.63,369069],
	["2018-01-19",18.71,19.5,18.61,19.16,492298],
	["2018-01-22",19.07,19.36,18.8,19.16,277122],
	["2018-01-23",19.1,19.48,19.08,19.39,324010],
	["2018-01-24",19.48,20.69,19.17,20.64,695181],
	["2018-01-25",20.35,20.62,20.15,20.19,272182],
	["2018-01-26",20.1,20.57,20.05,20.36,234446],
	["2018-01-29",20.33,20.68,19.65,19.88,296878],
	["2018-01-30",19.83,19.9,19.24,19.36,285165],
	["2018-01-31",19.27,19.47,18.91,19.19,244083],
	["2018-02-01",19.21,19.48,18.83,19.46,360713],
	["2018-02-02",19.2,19.43,18.92,19.31,200742],
	["2018-02-05",18.85,19.38,18.68,19.25,220254],
	["2018-02-06",18.7,19.18,18.44,18.8,425786],
	["2018-02-07",19.08,19.13,18.21,18.55,265845],
	["2018-02-08",18.37,18.59,17.73,18.09,234811],
	["2018-02-09",17.6,17.69,16.28,16.99,375906],
	["2018-02-12",16.86,17.01,16.58,16.63,204765],
	["2018-02-13",16.8,17.2,16.72,16.76,202818],
	["2018-02-14",16.81,16.94,16.5,16.74,91252],
	["2018-02-22",16.91,17.07,16.83,17.02,167441],
	["2018-02-23",17.06,17.22,16.88,17.08,121445],
	["2018-02-26",17.17,17.58,17,17.47,168963],
	["2018-02-27",17.48,17.48,17.18,17.42,159204],
	["2018-02-28",17.25,17.39,17.01,17.1,129792],
	["2018-03-01",16.99,17.29,16.85,17.19,83399],
	["2018-03-02",17.1,17.24,16.95,16.96,89583],
	["2018-03-05",16.9,17.15,16.88,17.01,92878],
	["2018-03-06",17.1,17.43,16.93,17.42,168193],
	["2018-03-07",17.32,17.54,17.15,17.3,102527],
	["2018-03-08",17.24,17.35,17.18,17.28,66429],
	["2018-03-09",17.28,17.63,17.16,17.55,168870],
	["2018-03-12",17.61,17.86,17.51,17.8,188087],
	["2018-03-13",17.77,17.77,17.38,17.47,93241],
	["2018-03-14",17.45,17.48,17.3,17.3,70812],
	["2018-03-15",17.2,17.39,17.18,17.3,63579],
	["2018-03-16",17.33,17.43,17,17.03,85702],
	["2018-03-19",17.01,17.19,16.96,17.03,90664],
	["2018-03-20",16.91,17.15,16.88,17.11,67313],
	["2018-03-21",17.14,17.52,17.03,17.11,139076]
];
