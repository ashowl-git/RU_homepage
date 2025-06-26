# FMU센서Vision기술 통합을 통한 초개인화 최적 환경 제공 시스템 기술적 실현 가능성 및 FMU 구축 심층 분석 보고서

# **FMU, 센서, Vision 기술 통합을 통한 초개인화 최적 환경 제공 시스템: 기술적 실현 가능성 및 FMU 구축 심층 분석 보고서**

## **I. Executive Summary**

본 보고서는 Functional Mock-up Units (FMU), 다중 모드 센서(환경, 비전), 그리고 빌딩 정보 모델링(BIM)을 통합하여 상세한 공간 분포 정보를 구축하고, 이를 통해 공간 생활자에게 초개인화된 최적 환경을 제공하고자 하는 시스템의 전반적인 기술적 실현 가능성을 평가한다. 특히, 시스템의 핵심 요소인 FMU 파일 구축 방법에 대한 심층 분석을 제공한다.

제안된 시스템은 BIM 기반 공간 모델링, EnergyPlus 시뮬레이션, FMU 생성, 다중 센서 및 Vision 기술을 활용한 실시간 데이터 획득, FMU 기반 시뮬레이션, Vision-BIM/FMU 결과 매칭을 통한 학습, 그리고 궁극적으로 센서 최소화 또는 센서리스 환경 구축이라는 단계적 접근 방식을 포함한다.

분석 결과, 제안된 시스템의 각 구성 요소 기술은 현재 연구 및 산업 분야에서 개별적으로 성숙 단계에 있거나 활발히 발전 중이며, 이들의 통합은 기술적으로 매우 도전적이지만 실현 가능한 목표로 평가된다. BIM에서 EnergyPlus IDF로의 변환 과정에서의 데이터 정밀도 확보, 다양한 실시간 데이터 스트림(기상 정보, 센서 데이터, Vision 기반 활동 정보)과 FMU 간의 정교한 동기화 및 연동, Vision 기술을 통한 정확한 내부 발열 및 활동 정보 추론, 그리고 학습된 모델을 통한 센서리스 환경으로의 전환은 핵심적인 기술적 과제이다.

FMU 구축과 관련하여, Functional Mock-up Interface (FMI) 표준은 모델 교환 및 공동 시뮬레이션을 위한 강력한 기반을 제공하며, EnergyPlus 모델로부터 FMU를 생성하기 위한 EnergyPlusToFMU와 같은 도구들이 존재한다. 최신 FMI 3.0 표준은 복잡한 데이터 유형 지원 및 향상된 공동 시뮬레이션 기능을 제공하여 본 시스템의 실시간 데이터 통합에 유리할 수 있다.

본 보고서는 시스템의 성공적인 구축을 위해 초기 BIM-EnergyPlus 데이터 파이프라인의 품질 확보, FMI 표준 버전 선택에 대한 전략적 접근, 견고한 데이터 관리 및 동기화 메커니즘 설계, Vision 시스템의 정확도 및 개인정보보호 문제 해결, 단계적 파일럿 프로젝트를 통한 검증을 핵심 권고사항으로 제시한다. 이러한 과제들을 체계적으로 해결해 나간다면, 제안된 시스템은 지능형 빌딩 기술 분야에서 혁신적인 초개인화 환경 제어 솔루션을 제공할 수 있을 것으로 기대된다.

## **II. 초개인화 공간 환경 시스템 소개**

### **1. 개념적 개요**

사용자가 구상하는 시스템은 FMU(Functional Mock-up Unit) 기반 시뮬레이션과 실시간 센서 및 Vision 기술로부터 얻어지는 상세한 공간 분포 정보를 활용하여, 건물 내 생활자에게 고도로 개인화된 최적의 환경을 제공하는 것을 목표로 한다. 이 시스템의 핵심 아이디어는 건물 공간의 동적 디지털 트윈(Digital Twin)을 구축하고, 이를 통해 거주자의 실시간 요구와 활동에 적응적으로 반응하는 환경을 구현하는 것이다. 정적인 건물 모델과 동적인 실제 운영 환경 간의 간극을 메우고, 사전 정의된 스케줄이나 일반적인 거주자 프로파일을 넘어서는, 진정한 의미의 초개인화된 환경 제어를 실현하고자 한다.

### **2. 통합의 중요성**

제안된 시스템의 성공은 예측 시뮬레이션을 위한 FMU, 실제 환경 데이터 측정을 위한 센서, 그리고 거주자 존재 유무, 활동 및 발열량 감지를 위한 Vision 기술의 유기적인 통합에 달려있다. 이러한 통합은 기존의 정적인 건물 모델링 방식에서 벗어나, 실제 건물의 동적인 운영 상황을 실시간으로 반영하고 예측하는 데 핵심적인 역할을 한다. 시뮬레이션은 제어 전략을 수립하는 데 필요한 예측 정보를 제공하고, 센서 및 Vision 데이터는 시뮬레이션 모델을 보정하고 학습 모델을 훈련시키는 데 사용된다. 이 상호작용을 통해 시스템은 점진적으로 정확도를 높여나가며, 궁극적으로는 학습된 모델을 기반으로 물리적 센서의 의존도를 줄여 최소 센서 또는 센서리스(sensor-less) 환경을 구축하는 혁신적인 목표를 추구한다. 이는 건물 환경 제어 분야에서 기존의 반응형 시스템을 넘어 예측적이고 개인화된 접근 방식으로의 중요한 전환을 의미한다.

## **III. 핵심 기술 실현 가능성 분석**

### **A. 빌딩 정보 모델링(BIM) 및 에너지 시뮬레이션 기반 구축**

### **1. 건물 데이터 수집 및 Revit BIM 생성 (사용자 단계 1)**

시스템 구축의 첫 단계는 기존 건물 정보(예: 도면, 사양서 등, 사용자 질의의 "도서 정보"는 이러한 건축 관련 자료를 의미하는 것으로 해석됨)를 수집하여 Autodesk Revit을 사용한 BIM(Building Information Modeling) 모델을 생성하는 것이다. 이는 건축, 엔지니어링, 건설(AEC) 산업에서 표준적으로 활용되는 접근 방식이다. BIM은 설계에서 분석으로의 정보 전달을 효율화하는 데 필수적인 풍부한 데이터를 포함하는 3차원적 건물 표현을 제공한다.1 이 초기 BIM 모델의 정확성과 완전성은 후속 에너지 모델링 및 전체 시스템의 신뢰성에 직접적인 영향을 미치므로, 입력 데이터의 품질 관리가 매우 중요하다.1

### **2. Revit에서 EnergyPlus (IDF)로 변환 (사용자 단계 2)**

다음 단계는 생성된 Revit BIM 모델을 EnergyPlus의 입력 데이터 파일(IDF) 형식으로 변환하는 과정이다. 이 변환은 종종 gbXML(Green Building XML)과 같은 중간 형식을 사용하거나, 특정 플러그인을 통해 직접적으로 이루어진다. 그러나 이 변환 과정은 기술적으로 상당한 어려움이 따르는 것으로 알려져 있다. 연구에 따르면 Revit과 EnergyPlus 간의 상호운용성은 "완벽하지 않으며", 변환된 형상의 오류 및 정확한 시뮬레이션에 필요한 데이터 누락 문제를 야기할 수 있다.2 Revit 모델은 주로 문서화를 위해 준비되는 반면, 에너지 시뮬레이션 모델은 상세한 열적, 기하학적 정보를 요구하기 때문에 이러한 근본적인 목적의 차이가 주요 장애물로 작용한다.3 실제로 "Revit 건축 모델은 에너지 모델로 내보내기 전에 항상 어느 정도의 정리 작업이 필요하다"는 지적은 이러한 현실을 반영한다.3

이러한 문제를 완화하기 위해 Pollination Revit 플러그인과 같은 전문 도구들이 개발되었다.3 이러한 도구는 "불완전한 Revit 모델"로부터 유효한 에너지 모델을 추출하기 위한 시각화, 편집 및 검증 기능을 제공하여 변환 과정의 정확도를 높이는 데 도움을 줄 수 있다. 따라서 고품질의 IDF 파일을 확보하기 위해서는 상당한 노력, 전문 도구의 활용, 그리고 전문가의 개입이 필수적이다. 이 단계에서의 데이터 손실, 기하학적 부정확성, 의미론적 불일치 등의 문제를 적절히 해결하지 못하면 오류가 FMU 및 후속 시뮬레이션으로 전파되어 전체 시스템의 정확성을 저해할 수 있으므로, 단순한 "내보내기-가져오기" 작업으로 간주해서는 안 된다.

**표 1: Revit-to-EnergyPlus 변환: 과제 및 완화 전략**

| **과제** | **과제 설명 (참고: )** | **EnergyPlus 모델에 미치는 영향** | **완화 전략/도구** |
| --- | --- | --- | --- |
| 기하학적 복잡성 및 단순화 | Revit 모델은 시뮬레이션에 불필요하거나 과도하게 상세한 기하학적 요소를 포함할 수 있음. 단순화 과정에서 중요한 열적 경계가 손실될 수 있음. | 부정확한 열 전달 계산, 잘못된 부하 예측, 시뮬레이션 오류 발생 가능성. | Revit 내 수동 정리, 에너지 해석을 위한 모델링 가이드라인 초기 정의, gbXML과 같은 중간 형식 사용 시 세심한 검토, Pollination과 같은 전문 플러그인 사용. |
| 누락된 열 물성치 | Revit 모델에 재료의 열전도율, 비열, 밀도 등 에너지 시뮬레이션에 필수적인 열 물성치 정보가 누락되거나 부정확할 수 있음. | 건물 외피 및 내부 구조물의 열적 거동 예측 부정확. | Revit 모델링 단계에서 정확한 재료 정보 입력, IDF 변환 후 수동으로 물성치 보완 또는 라이브러리 매핑, 에너지 모델링 표준 준수. |
| 부정확한 공간/존(Zone) 정의 | 에너지 시뮬레이션의 기본 단위인 존(Zone)이 Revit의 룸(Room)/공간(Space)과 일치하지 않거나, 존 경계가 잘못 정의될 수 있음. 플레넘 공간, 샤프트 등 미포함 공간 처리 문제. | 존별 부하 계산 오류, HVAC 시스템 용량 산정 오류, 공기 흐름 해석 부정확. | Revit에서 에너지 해석용 존을 명확히 구분하여 모델링, 변환 과정에서 존 매핑 검증, IDF 편집기를 통한 존 정의 수정. |
| 데이터 매핑 문제 | 창호, 문, 내부 마감재 등의 속성 정보가 EnergyPlus에서 요구하는 형식과 다르거나 매핑되지 않을 수 있음. 스케줄, 내부 발열 조건 등 운영 정보 누락. | 창호 열관류율 및 SHGC 오류, 내부 발열량 과소/과대평가, 운영 시나리오 왜곡. | 변환 도구의 매핑 설정 검토 및 사용자 정의, IDF 파일에서 관련 객체(WindowMaterial:SimpleGlazingSystem, Lights, People, ElectricEquipment 등)의 속성값 직접 수정 또는 추가. 스케줄 정보는 EnergyPlus에서 별도 정의 필요. |
| 모델의 상세 수준(LOD) 불일치 | Revit 모델의 상세 수준이 에너지 시뮬레이션 요구사항과 맞지 않아 너무 단순하거나 복잡할 수 있음. | 시뮬레이션 시간 과다 소요 또는 정확도 저하. | 에너지 시뮬레이션 목적에 맞는 적절한 LOD로 Revit 모델 작성, 불필요한 객체 제거 또는 단순화. |

### **B. 동적 시뮬레이션을 위한 FMU(Functional Mock-up Unit) (사용자 단계 3)**

### **1. FMI(Functional Mock-up Interface) 표준**

FMU 기반 동적 시뮬레이션은 제안된 시스템의 핵심이다. FMI는 동적 시뮬레이션 모델 교환 및 공동 시뮬레이션(co-simulation)을 위한 개방형, 도구 독립적 표준이다.4 이 표준은 C-API와 XML 모델 기술 파일(modelDescription.xml)을 정의하며, 이들은 .fmu라는 확장자를 가진 zip 파일 형태로 패키징된다.6 이러한 표준화는 서로 다른 소프트웨어에서 개발된 모델들을 통합하는 데 매우 중요하다.

- **FMI 버전:**
    - **FMI 1.0:** 2010년에 발표되었으며 6, 모델 교환(Model Exchange, ME) 및 공동 시뮬레이션(Co-Simulation, CS)의 기본 개념을 도입했다.4 EnergyPlus의 FMU 가져오기 인터페이스는 FMI 1.0 공동 시뮬레이션 표준을 준수한다.8
    - **FMI 2.0:** 2014년에 발표되었으며 4, 방향성 도함수 지원과 같은 기능을 추가하고 1.0 버전의 모호성을 명확히 했다.4 새로운 애플리케이션에 권장되며 4, 광범위하게 지원된다 (FMI 2.0의 경우 200개 이상의 가져오기 도구와 110개 이상의 내보내기 도구가 지원됨).6 EnergyPlusToFMU 도구는 FMI 1.0 및 2.0을 지원하며, 2.0이 기본값이다.9
    - **FMI 3.0:** 2021년에 발표되었으며 6, 현재 릴리스는 3.0.2이다.6 이 버전은 OSI와 같은 복잡한 센서 데이터를 위한 이진 데이터 유형, 하이브리드 공동 시뮬레이션을 위한 클럭, 배열 변수, 계층화된 표준을 위한 "추가 디렉토리(extra directory)"와 같은 중요한 개선 사항을 도입했다.5 이는 복잡한 센서 데이터 통합 및 시스템의 미래 확장성 확보에 특히 유용하다. 도구 지원은 증가하고 있으며, 50개 이상의 가져오기 도구와 35개 이상의 내보내기 도구가 FMI 3.0을 지원한다.6
- **FMI 유형:**
    - **모델 교환 (ME):** FMU는 모델 방정식을 포함한다. 가져오는 도구(importing tool)가 수치 해석기(numerical solver)를 제공한다.4 이는 마스터 해석기와의 긴밀한 결합을 허용하지만, 마스터가 적분(integration)을 처리해야 한다.
    - **공동 시뮬레이션 (CS):** FMU는 자체 해석기를 포함한다.4 가져오는 도구는 이산적인 통신 시점에서 데이터 교환을 관리하고 FMU에 다음 단계로 진행하도록 지시한다. 이는 서로 다른 도구들을 결합하는 데 일반적으로 구현하기 더 간단하며, EnergyPlus FMU 가져오기 8 및 EnergyPlusToFMU를 사용한 내보내기 9의 주요 초점이다.
- **FMU 구조:** FMU는 zip 파일로, 다음을 포함한다 4:
    - modelDescription.xml: 모델 구조, 변수, 매개변수, 입력/출력, 기능 등을 정의한다.
    - 구현체: 하나 이상의 플랫폼을 위한 C-소스 코드 또는 바이너리(예: Windows용 DLL).
    - 추가 데이터: 테이블, 리소스, 문서 등.5

**표 2: FMI 표준 버전 비교 (1.0, 2.0, 3.0)**

| **기능 범주** | **FMI 1.0 (참고: )** | **FMI 2.0 (참고: )** | **FMI 3.0 (참고: )** | **사용자 프로젝트 관련성** |
| --- | --- | --- | --- | --- |
| 핵심 기능 | 모델 교환(ME) 및 공동 시뮬레이션(CS) 기본 개념 도입. 상태, 파라미터, 입출력 변수 정의. | ME 및 CS 기능 향상. 방향성 도함수 지원. 이벤트 처리 개선. | ME 및 CS 기능 대폭 확장. 새로운 인터페이스 유형(Scheduled Execution) 추가 검토 중. | FMI 3.0의 향상된 공동 시뮬레이션 기능은 실시간 데이터 통합에 유리. |
| 데이터 유형 | 실수(Real), 정수(Integer), 부울(Boolean), 문자열(String) 지원. | FMI 1.0 데이터 유형 유지. | 이진(Binary) 데이터 유형 추가 (복잡한 센서 데이터, 이미지 등). 열거형(Enumeration) 지원. 배열 변수(Array variables) 명시적 지원. | FMI 3.0의 이진 데이터 유형은 Vision 및 다중 센서 데이터의 효율적 교환에 매우 중요. 배열 변수는 다점 센서 데이터 처리에 유용. |
| 공동 시뮬레이션 기능 | 기본적인 마스터-슬레이브 공동 시뮬레이션. 고정 스텝 크기 위주. | 가변 스텝 크기 지원 명확화. 상태 저장 및 복원 기능 개선. | 클럭(Clocks) 및 하이브리드 공동 시뮬레이션 도입 (이벤트 기반 및 시간 기반 동기화). 중간 변수 접근(Intermediate variable access) 기능. | FMI 3.0의 클럭 및 하이브리드 공동 시뮬레이션은 비동기적 실시간 데이터(날씨, Vision 활동) 통합에 필수적. |
| 도구 및 생태계 | 초기 도구 지원. MODELISAR 프로젝트 결과물. | 광범위한 도구 지원 (200+ 가져오기, 110+ 내보내기). 산업계에서 널리 사용. | 도구 지원 증가 추세 (50+ 가져오기, 35+ 내보내기). 새로운 기능 지원을 위한 도구 업데이트 진행 중. | FMI 2.0은 현재 EnergyPlusToFMU에서 지원되어 즉시 활용 가능. FMI 3.0은 장기적인 시스템 고도화에 유리. |
| 고급 기능 | 제한적. | 직렬화(Serialization) 개선. | 추가 디렉토리(Extra directory)를 통한 계층화된 표준 지원. 포트 및 아이콘 정의. 소스 코드 FMU 개선. | FMI 3.0의 "추가 디렉토리"는 사용자 정의 데이터나 모델을 FMU와 함께 배포하는 데 유용할 수 있음. |

사용자의 시스템은 다양한 실시간 데이터 입력을 받는 FMU 공동 시뮬레이션에 크게 의존한다. FMI 표준의 발전, 특히 FMI 3.0에서 복잡한 데이터 유형 및 공동 시뮬레이션 견고성 향상 5에 대한 이해는 도구 선택 및 향후 시스템 아키텍처에 대한 정보에 입각한 결정을 내리는 데 매우 중요하다. 이 표는 이러한 결정을 안내하기 위한 직접적인 비교를 제공한다.

### **2. EnergyPlus에서 FMU 생성 방법 (사용자 단계 3)**

- **EnergyPlusToFMU 도구:** 이는 사용자의 프로젝트에 핵심적인 도구이다. EnergyPlus IDF 파일을 공동 시뮬레이션용 FMU로 변환하는 Python 스크립트(EnergyPlusToFMU.py)이다.9
    - **작업 흐름:** Python, EnergyPlus IDD 파일, IDF 파일이 필요하며, 선택적으로 날씨 파일도 사용할 수 있다.9
    - **명령줄 사용법:** python EnergyPlusToFMU.py -i <idd_file> -w <weather_file> -a <fmi_version> <idf_file>.9
    - **지원 FMI 버전:** FMI 1.0 및 2.0 (기본값은 2.0).9
    - **출력:** 공동 시뮬레이션 준비가 완료된 .fmu 파일.
- **EnergyPlus와 FMU 연동 (EnergyPlus로 FMU 가져오기):** 사용자의 주요 목표는 EnergyPlus *에서* FMU를 내보내는 것이지만, EnergyPlus가 FMU를 *가져오는* 방식을 이해하면 공동 시뮬레이션 기능에 대한 맥락을 파악하는 데 도움이 된다.
    - EnergyPlus는 마스터 시뮬레이터 역할을 하여 FMU(예: Modelica로 모델링되고 FMU로 내보내진 HVAC 시스템)를 가져올 수 있다.8
    - 여기에는 FMU의 modelDescription.xml에서 정보를 추출하고 IDF 스니펫을 생성하는 FMUParser 유틸리티가 포함된다.8
    - EnergyPlus는 ExternalInterface 객체(ExternalInterface:FunctionalMockupUnitImport:To:Schedule, ExternalInterface:FunctionalMockupUnitImport:To:Actuator, ExternalInterface:FunctionalMockupUnitImport:From:Variable)를 사용하여 EnergyPlus 변수를 FMU 변수와 연결한다.8
    - 이 기능은 사용자가 EnergyPlus 기반 FMU와 다른 FMU를 통합하려는 경우 EnergyPlus의 공동 시뮬레이션 생태계에서의 역할을 강조한다.

EnergyPlus IDF에서 EnergyPlusToFMU를 통해 FMU로 직접 변환하는 경로는 FMI 2.0에 대해 잘 정의되어 있다.9 그러나 사용자가 Vision 시스템과의 풍부한 데이터 교환 등 FMI 3.0 기능을 활용하고자 한다면, EnergyPlusToFMU가 업데이트될지 또는 EnergyPlus 모델에 대한 대체 FMU 생성/래핑 전략이 필요한지 검토해야 한다. FMI 3.0 5은 이진 데이터 유형 및 개선된 공동 시뮬레이션 이벤트와 같은 기능을 제공하여 실시간 Vision 및 센서 데이터 통합에 매우 유용할 수 있다. 현재 EnergyPlusToFMU가 FMI 3.0을 지원한다는 명시적인 언급이 없으므로 9, 이는 도구의 최신 버전/기능을 확인하거나, FMI 3.0이 필요할 경우 다른 접근 방식을 고려해야 함을 시사한다. 예를 들어, FMI 2.0 FMU를 사용하고 복잡한 데이터 직렬화/역직렬화를 수동으로 처리하거나, EnergyPlus 시뮬레이션을 FMI 3.0 FMU를 내보낼 수 있는 다른 환경으로 래핑하는 방안(복잡성 증가)을 고려할 수 있다. 이는 향후 시스템 기능에 대한 중요한 결정 지점이다.

### **3. 대체 FMU 생성 경로 (맥락을 위한 간략한 개요)**

- **Modelica 기반 도구 (예: OpenModelica, Dymola):** Modelica는 복잡한 물리 시스템에 적합한 객체 지향 모델링 언어이다. OpenModelica (buildModelFMU() 명령14) 및 Dymola (GUI 및 명령줄 내보내기15)와 같은 도구는 ME 및 CS FMU 모두에 대해 강력한 FMI 내보내기 기능을 갖추고 있으며, 종종 FMI 1.0 및 2.0을 지원한다. 예를 들어 Dymola는 FMI 버전을 지정하고 소스 코드를 포함할 수 있도록 허용한다.16 이는 시스템의 일부(예: 고급 HVAC 제어)가 이러한 환경에서 모델링된 후 EnergyPlus FMU와 공동 시뮬레이션되는 경우에 유용하다.
- **Simulink (MATLAB):** Simulink 모델은 Simulink Compiler와 exportToFMU 명령을 사용하여 독립형 FMU(CS 및 ME)로 내보낼 수 있다.11 FMI 2.0 및 3.0을 지원한다.11 제어 알고리즘이 Simulink에서 개발되는 경우 유용할 수 있다.
- **Python 기반 FMU 생성/래핑:**
    - **FMPy:** 주로 FMU 시뮬레이션(FMI 1.0 & 2.0, ME & CS)을 위한 Python 라이브러리이지만, C 코드 FMU를 컴파일하고 디버깅을 위한 CMake 프로젝트를 생성할 수도 있다.17 EnergyPlus FMU를 직접 *생성*하는 것은 아니지만, Python 환경에서 FMU를 테스트하고 사용하는 데 필수적이다.
    - **PythonFMU (Simcenter STAR-CCM+ 컨텍스트를 통해):** 20는 PythonFMU 패키지를 사용하여 *사용자 Python 스크립트에서* FMU를 빌드하는 방법을 설명한다. 이는 도구 결합 솔루션으로, 대상 시스템에 호환되는 Python 환경 및 라이브러리가 필요함을 의미한다. 이는 데이터 처리 또는 AI 모델과 같은 사용자 지정 Python 스크립트를 공동 시뮬레이션을 위해 FMU로 패키징해야 하는 경우에 유용하다.
    - **PyFMI (JModelica의 일부):** EnergyPlus/Python 공동 시뮬레이션 예제에서 볼 수 있듯이 Python에서 FMU를 로드하고 실행하는 데 사용된다.18
- **참조 FMU:** FMI 호환성 및 도구 체인 테스트를 위해 참조 FMU가 존재한다.19

**표 3: FMU 생성 도구/방법 개요**

| **소스 도구/언어** | **FMU 생성 도구/방법** | **지원 FMI 버전** | **FMU 유형 (ME, CS)** | **주요 특징/장점** | **단점/고려 사항** | **사용자 프로젝트 관련성** |
| --- | --- | --- | --- | --- | --- | --- |
| EnergyPlus | EnergyPlusToFMU.py 9 | 1.0, 2.0 (기본값 2.0) | CS | IDF에서 직접 생성, EnergyPlus 생태계와 통합 용이. | EnergyPlus 모델 범위로 제한됨, FMI 3.0 지원 여부 확인 필요. | 주 경로. 건물 물리 모델 FMU화. |
| Modelica (OpenModelica) | buildModelFMU() 14 | 1.0, 2.0.4 (ME), 2.0.4 (CS) | ME, CS | 강력한 물리 시스템 모델링 언어, 개방형 표준. | Modelica 학습 필요, 복잡한 모델의 경우 전문 지식 요구. | 고급 HVAC 제어 또는 기타 물리 시스템 컴포넌트 모델링 시 고려. |
| Modelica (Dymola) | GUI/명령줄 내보내기 15 | 1.0, 2.0 (선택 가능) | ME, CS | 산업계에서 널리 사용되는 강력한 모델링 및 시뮬레이션 환경, 소스 코드 포함 옵션. | 상용 라이선스 필요. | OpenModelica와 유사한 용도, 상용 솔루션 선호 시. |
| Simulink (MATLAB) | exportToFMU (Simulink Compiler) 11 | 2.0, 3.0 | CS (주로), ME | 그래픽 기반 모델링 환경, 제어 시스템 설계에 강점, FMI 3.0 지원. | MATLAB/Simulink 라이선스 필요. | 제어 알고리즘 개발 및 FMU화에 유용. |
| Python 스크립트 | PythonFMU 20 (도구 결합) | 도구 종속 (PythonFMU는 FMI 표준 준수) | CS | Python의 유연성 활용, 기존 Python 코드(AI/ML 모델 등)를 FMU로 래핑 가능. | 대상 시스템에 Python 환경 및 라이브러리 종속성 발생, FMU 자체에 모든 환경이 패키징되지 않음. | Vision 처리 로직, AI/ML 기반 제어기 등을 FMU로 통합 시 고려. |

사용자는 "FMU 파일 구축 방법"에 대한 심층 조사를 구체적으로 요청했다. 이 표는 다양한 경로를 구조적으로 비교하여 이 요청에 직접적으로 응답한다. 사용자가 주요 방법(EnergyPlusToFMU)과 대안을 이해하도록 도와 다양한 시스템 구성 요소 및 향후 개발에 대한 정보에 입각한 선택을 가능하게 한다. 이는 수많은 자료9의 정보를 종합한다.

### **C. 공간 데이터 수집을 위한 다중 모드 센싱**

### **1. 3D 메시 그리드 환경 센서 (사용자 단계 4)**

- **배치:** 온도, 습도, 공기질 등을 측정하기 위한 센서의 3D 메시 그리드 설치 계획이 포함된다.21 연구에서는 3D 공기질 데이터 수집을 위한 UAV 사용 21 및 센서 노드가 릴레이 역할을 하여 확장성과 복원력을 향상시키는 메시 네트워크 활용을 지원한다.22
- **데이터 유형:** 스마트 빌딩의 일반적인 센서에는 온도, 습도, CO2, VOC, 대기압 센서 등이 포함된다.23
- **실시간 수집:** IoT 플랫폼 및 센서 네트워크는 실시간 환경 데이터 수집의 핵심이다.23 데이터는 게이트웨이/AP에서 집계되고, 에지에서 사전 처리되며, 보안을 위해 암호화될 수 있다.22
- **최적 센서 배치(Optimal Sensor Placement, OSP):** 이는 특히 장기 목표가 센서 최소화이므로 중요한 고려 사항이다. OSP는 모니터링 정확도, 비용 및 시스템 성능 간의 균형을 맞추는 것을 목표로 한다.25 전략은 결정론적(그리드 기반), 비결정론적(무작위/확률적) 또는 반결정론적일 수 있다.25 GIS는 배치 정보를 제공하기 위해 3D 지형/환경 정보에 사용될 수 있다.25 최적의 센서 구성을 찾기 위해 최적화 알고리즘이 사용된다.27

초기 *고밀도* 3D 메시 그리드 배치는 나중에 센서 최소화를 가능하게 할 모델을 훈련시키기 위한 포괄적인 데이터를 수집하는 데 매우 중요하다. 그러나 이 초기 고밀도 배치 전략은 수집된 데이터가 효과적인 모델 훈련을 위해 풍부하고 대표적인지 확인하기 위해 OSP 원칙에 관한 신중한 계획이 필요하다. 초기 "고밀도" 배치에 대해서도 OSP 원칙(예: 커버리지 보장 및 공간적 변동성 포착 21)은 후속 모델 훈련 및 센서 감소 단계를 위해 수집된 데이터의 가치를 극대화하는 데 중요하다. 잘못 설계된 초기 그리드는 차선의 모델로 이어질 수 있다.

**표 4: 실내 환경 모니터링을 위한 센서 기술**

| **측정 매개변수** | **센서 기술** | **일반적인 정확도/범위** | **비용 (상대적: 낮음, 중간, 높음)** | **배치 고려 사항 (참고: )** | **데이터 출력/인터페이스** | **사용자 시스템 관련성** |
| --- | --- | --- | --- | --- | --- | --- |
| 온도 | 서미스터, RTD, 반도체 | ±0.1°C ~ ±1°C | 낮음 ~ 중간 | 보정 필요성, 주변 열원으로부터의 영향 최소화, 공기 흐름. | 아날로그, 디지털 (I2C, SPI), 네트워크 (WiFi, LoRaWAN) | 핵심 환경 상태 변수. |
| 습도 | 용량형, 저항형 | ±2% RH ~ ±5% RH | 낮음 ~ 중간 | 응결 방지, 센서 오염 방지, 통풍이 잘 되는 곳에 설치. | 아날로그, 디지털 (I2C, SPI), 네트워크 | 핵심 환경 상태 변수, 쾌적도 및 에너지 계산에 중요. |
| CO2 | 비분산 적외선 (NDIR) | ±30 ppm ~ ±75 ppm 또는 ±3% ~ ±5% 판독값 | 중간 ~ 높음 | 주기적인 보정, 다른 가스와의 교차 민감도 고려, 통풍이 잘 되는 곳에 설치. | 아날로그, 디지털 (UART, I2C), 네트워크 | 실내 공기질(IAQ) 및 환기 제어의 주요 지표. |
| 휘발성 유기 화합물 (VOCs) | 금속 산화물 반도체 (MOS), 광이온화 검출기 (PID) | ppb ~ ppm 범위 (센서 유형에 따라 다름) | 중간 ~ 높음 | 다양한 VOC에 대한 민감도, 환경 조건(온습도)에 따른 드리프트, 보정. | 아날로그, 디지털, 네트워크 | IAQ 지표, 특정 오염원 감지 가능. |
| 미세먼지 (PM2.5/PM10) | 광학 입자 계수기 (레이저 산란 방식) | ±10 µg/m³ 또는 ±10% 판독값 | 중간 ~ 높음 | 센서 오염 및 청소 주기, 공기 흡입구 막힘 방지. | 디지털 (UART), 네트워크 | IAQ의 중요한 지표, 건강 영향. |
| 재실 감지 (기본) | 수동 적외선 (PIR) | 움직임 감지 기반, 범위 제한적 (예: 3-12m) | 낮음 | 시야각, 감지 범위, 열원 간섭, 미세 움직임 감지 어려움.23 | 디지털 (High/Low 신호) | Vision 시스템 보조 또는 초기 단계 재실 확인. |
| 재실 감지 (정밀) | 초음파 센서 | 도플러 효과 기반, 넓은 커버리지, 미세 움직임 감지 우수 23 | 낮음 ~ 중간 | PIR보다 전력 소비 높음, 장애물에 의한 반사 영향. | 디지털 | Vision 시스템의 보조 또는 특정 구역 정밀 감지. |

사용자는 "다중 센서 (온도, 습도, 공기질 등)"를 배치할 계획이다. 이 표는 일반적인 센서 유형 23, 특성 및 배치 고려 사항에 대한 실용적인 개요를 제공하여 3D 메시 그리드용 센서 선택에 도움을 준다. 비용, 정확성 및 배치 복잡성 간의 정보에 입각한 절충안을 만드는 데 도움이 된다.

### **2. Vision 시스템 (사용자 단계 5)**

- **카메라 설치 및 목적:** 카메라는 재실자, 내부 발열량(재실자, 장비, 창호 일사량), 활동 정보에 대한 데이터를 수집하는 데 사용된다.
- **재실자 감지 및 계수:**
    - YOLOv5 29 및 Faster R-CNN 30과 같은 딥러닝 모델이 효과적이다. 29 (B18)은 개인 정보 보호 및 계산 요구량 감소를 위해 저해상도 열화상 이미지에 전이 학습을 적용한 YOLOv5를 강조하며, 높은 정밀도와 재현율을 달성했다. 30 (B19)는 사람 수 계수(98.9% IoU 정확도) 및 활동 감지(88.5% IoU)에 Faster R-CNN을 사용했다.
    - **개인 정보 보호:** RGB 카메라의 주요 관심사이다. 저해상도 열화상 이미지 29 또는 기타 개인 정보 보호 기술(예: 익명화된 프레임 차이 31, 에지 처리 32)이 중요하다.
- **내부 발열량 추정:**
    - **재실자:** 수 및 활동 수준(HAR에서 파생)을 대사열 발생량에 매핑할 수 있다.
    - **장비 (모니터, 조명):** 컴퓨터 비전은 장비의 작동 상태(예: 모니터 켜짐/꺼짐, 조명 켜짐/꺼짐)를 감지할 수 있다. 33 (B15)는 어안 카메라의 HDR 이미지를 사용하여 CNN으로 재실, 장비, 조명 및 창문 상태를 실시간으로 모니터링하여 EnergyPlus의 고정 스케줄과 상당한 불일치를 보였다. 36 및 3738 또한 장비 사용 감지를 위한 딥러닝을 논의하며, 정적 프로파일에 비해 최대 53.95% 낮은 발열량을 보고했다.
    - **창호 일사량:** Vision 시스템은 창문 상태(예: 블라인드 열림/닫힘 33)를 평가하고 외부 일사량 데이터와 결합하여 일사량을 추정할 수 있다. 77은 차폐된 창문을 통한 일사량 분석용 소프트웨어를 논의하고, 78은 창문이 건물 에너지 사용에 미치는 중대한 영향을 언급한다.
- **인간 활동 인식 (HAR):**
    - CNN, VGG-16, ResNet50과 같은 딥러닝 모델이 사용된다.3434 (B20)는 전처리된 이미지를 사용하여 11개 활동 클래스에 대해 96.4%의 정확도를 달성한 CNN을 자세히 설명한다. 35은 공간적 및 시간적 특징을 포착하기 위한 하이브리드 CNN-RNN 모델을 강조한다. 활동 정보는 정확한 내부 발열량 추정 및 개인화된 쾌적도에 매우 중요하다.

Vision 시스템은 풍부한 데이터를 제공하지만, 이를 통해 파생된 발열량 추정치의 정확도는 감지 모델(재실, 장비 상태, 활동)의 견고성과 매핑 기능(예: 활동 수준 대 대사율, 장비 전력 등급 대 열 출력)의 보정에 크게 좌우된다. 실제값 또는 정제된 시뮬레이션 출력에 대한 지속적인 보정이 필요하다. "발열량" 추정은 간접적인 과정이다. Vision은 *대리 지표*(예: 사람 존재, 모니터 켜짐, 사람 타이핑)를 감지한다. 이러한 대리 지표는 가정이나 모델(예: 타이핑하는 사람의 대사율, 모니터의 와트 수)을 사용하여 열 부하로 변환되어야 한다. 이러한 가정/모델의 정확성은 발열량 추정 정확도에 직접적인 영향을 미친다. 예를 들어, 33 (B15) 및 3638은 Vision 기반 동적 스케줄을 사용할 때와 EnergyPlus에서 고정 스케줄을 사용할 때 큰 차이를 보여주며, 이는 정확한 실시간 데이터의 중요성을 시사한다. 따라서 Vision 시스템의 출력은 원시 데이터뿐만 아니라 자체적으로 불확실성 수준을 갖는 처리된 정보이다. 이 불확실성은 FMU 시뮬레이션 또는 모델 훈련을 위한 입력으로 사용할 때 고려되어야 한다.

**표 5: 건물 적용을 위한 컴퓨터 비전 기술**

| **적용 분야** | **Vision 모델 예시** | **입력 데이터 유형** | **주요 성능 지표/보고된 정확도 (참고: )** | **개인 정보 영향 및 완화** | **사용자 시스템 관련성** |
| --- | --- | --- | --- | --- | --- |
| 재실자 감지/계수 | YOLOv5 29, Faster R-CNN 30 | 저해상도 열화상, RGB | YOLOv5(열화상): 정밀도 1.000, 재현율 0.984. Faster R-CNN(RGB): 사람 수 계수 IoU 98.9%. | RGB 사용 시 높음. 열화상/익명화/에지 처리로 완화. | 재실자 데이터 핵심, 발열량 및 활동 입력의 기초. |
| 장비 상태 감지 (모니터, 조명 등) | CNN 33, R-CNN 기반 모델 38 | HDR 어안 카메라, RGB | 장비 감지 정확도: 78.39%~83.33%. 고정 스케줄 대비 최대 53.95% 낮은 발열량 예측. | 상대적으로 낮으나, 작업 내용 유추 가능성 존재. | 내부 발열량의 주요 구성 요소. |
| 창호 일사량 평가 | CNN (창문/블라인드 상태 감지) 33 | HDR 어안 카메라 | 창문 상태 실시간 모니터링 가능. 정량적 일사량 평가는 추가 모델 필요. | 낮음. | 태양열 취득 부하 추정 지원. |
| 인간 활동 인식 (HAR) | CNN 34, VGG-16, ResNet50, CNN-RNN 하이브리드 35 | RGB, 전처리된 이미지 | CNN: 11개 활동 클래스 96.4% 정확도. 활동 감지 IoU 88.5%.30 | 활동 유형에 따라 개인 정보 민감도 다름. 익명화 기법 필요. | 개인화된 환경 제어 및 정확한 재실자 발열량 추정의 핵심. |

사용자는 명시적으로 "Vision 기술"을 사용할 계획이다. 이 표는 사용자의 질의와 관련된 다양한 Vision 응용 프로그램(재실, 발열량, 활동 29)에 대한 연구를 종합하여 모델, 데이터 유형 및 성능에 대한 비교 개요를 제공한다. 이는 기술 선택에 직접적인 정보를 제공하고 개인 정보 보호의 중요한 측면을 강조한다.

### **D. 실시간 데이터 통합 및 공동 시뮬레이션 (사용자 단계 6)**

### **1. 실시간 기상 데이터 통합**

FMU 시뮬레이션은 실시간 기상 정보를 활용할 것이다. 이러한 정보는 Weatherstack (상용, 실시간, 과거, 예보 데이터 제공 41) 또는 Open-Meteo (비상업적 용도 무료, 고해상도 전 지구 및 중간 규모 모델, 시간별 업데이트, 80년 과거 데이터 제공 42)와 같은 날씨 API를 통해 얻을 수 있다. FMI 표준 자체는 시간에 따라 변하는 입력을 지원하며, 이는 공동 시뮬레이션 중에 날씨 데이터가 FMU에 공급되는 방식이다.10

### **2. Vision 기반 활동 데이터를 FMU 시뮬레이션에 통합**

실시간 활동 데이터(사용자 단계 5에서 획득)가 FMU에 적용될 것이다. 이는 개인화의 핵심 측면이다. 이를 위해서는 FMU(건물 물리를 나타냄)가 각 통신 단계에서 외부 입력(활동 수준, 업데이트된 발열량)을 받을 수 있는 공동 시뮬레이션 프레임워크가 필요하다. 44 (B16)은 TensorFlow(DRL/제어 로직용)와 OpenCV(Vision 처리용)를 통합하는 FMI 기반 공동 시뮬레이션 프레임워크를 제안하며, 양방향 정보 동기화를 가능하게 한다. 이는 Vision 출력(활동, 발열량)이 FMU를 구동하는 사용자의 아키텍처와 매우 관련이 있다. 44 (B16)의 프레임워크는 정보 중계를 위한 공통 서버를 사용하고 시간-이벤트 하이브리드 구동 시뮬레이션을 처리하여, 재실자 활동 변경과 같은 이벤트가 상태 변경을 유발할 수 있는 시스템에 적합하다.

### **3. FMI 기반 공동 시뮬레이션에서의 동기화 및 데이터 교환**

- **마스터 알고리즘:** 마스터 알고리즘(또는 공동 시뮬레이션 오케스트레이션 엔진 - COE)은 FMU와 다른 구성 요소(예: Vision 처리 모듈, 날씨 API 클라이언트) 간의 데이터 교환 및 시간 동기화를 관리한다.44 EnergyPlus 자체는 FMU를 가져올 때 마스터 역할을 할 수 있으며 8, 또는 전용 공동 시뮬레이션 도구/미들웨어를 사용할 수 있다.46 PyFMI 18 또는 FMPy 17와 같은 라이브러리가 있는 Python 환경도 마스터 역할을 할 수 있다.
- **데이터 교환:** 이산적인 통신 지점에서 발생한다.8 FMU는 modelDescription.xml을 통해 입력 및 출력 변수를 노출한다.
- **시간 동기화:** 안정성과 정확성에 매우 중요하다. 모델 분리는 지연을 유발할 수 있다.48 데이터 스트림의 시간 단계나 지연 시간이 다른 경우 인터페이스 변수의 보간/외삽을 포함한 비동기 통신이 필요할 수 있다.44 FMI 3.0의 "클럭 및 하이브리드 공동 시뮬레이션" 기능 5은 이러한 시나리오를 더 잘 처리하도록 설계되었다.
- **과제:** 공동 시뮬레이션이 올바르게 처리되지 않으면 수치적 안정성이 문제가 될 수 있다.48 FMI 표준 자체는 여러 FMU에 대한 공동 시뮬레이션 알고리즘을 정의하지 않으며, 이는 마스터의 책임이다.6

마스터 알고리즘 및 공동 시뮬레이션 플랫폼 선택은 매우 중요하다. Python 기반 Vision 시스템, 실시간 API 및 EnergyPlus 파생 FMU를 통합해야 하므로, Python 기반 공동 시뮬레이션 환경(PyFMI/FMPy 사용) 또는 FMI 및 Python 스크립팅을 지원하는 전용 미들웨어44에서 개념화된 것이나 45에 언급된 일반 공동 시뮬레이션 플랫폼 등)가 가장 적절해 보인다. 시스템에는 비동기 데이터 스트림이 포함될 가능성이 높으므로 FMI 3.0의 기능 또는 보간/외삽의 강력한 처리가 필수적이다. 사용자 단계 6은 "FMU에 실시간 기상청 정보 및 Vision 기반 실시간 Activity 데이터 적용 후 시뮬레이션 결과 도출"이다. 이는 FMU가 실시간 입력을 받는 공동 시뮬레이션 설정을 의미한다. 날씨 데이터 41와 Vision 데이터 44가 주요 실시간 입력이다. FMI 표준 4은 FMU가 데이터를 교환하는 메커니즘을 제공한다. 그러나 여러 구성 요소(FMU, Vision 시스템, 날씨 API 클라이언트)를 조정하려면 마스터 알고리즘/COE가 필요하다.44 데이터 소스는 이기종이며 비동기적일 가능성이 높다(날씨는 시간별/분별 업데이트, Vision은 잠재적으로 더 빠르게 업데이트, FMU 시뮬레이션 단계는 다를 수 있음). 이러한 비동기성은 강력한 동기화, 잠재적인 보간/외삽 48, 그리고 통신 단계의 신중한 관리를 필요로 한다. FMI 3.0의 클럭 기능 5은 이러한 하이브리드 시스템을 위해 설계되었다. 이러한 통합의 복잡성은 단순한 직접 연결로는 충분하지 않을 수 있으며, 44 (B16)에서 영감을 받은 맞춤형 개발 또는 조정된 미들웨어와 같은 보다 정교한 공동 시뮬레이션 프레임워크가 필요할 것임을 시사한다.

## **IV. 고급 데이터 처리 및 모델 지능화**

### **A. 데이터 융합 및 매칭 (사용자 단계 7)**

- **목적:** 시스템은 Vision 기반 결과(재실, 활동, 파생된 발열량)를 BIM 공간 정보 및 FMU 시뮬레이션 출력과 매칭해야 한다. 이 매칭은 다음을 위해 매우 중요하다:
    - **Vision 데이터의 맥락화:** 감지된 재실자/활동을 특정 BIM 존과 연결한다.
    - **Vision 모델 훈련:** FMU 출력(예: 특정 재실자 부하 하에서의 시뮬레이션된 구역 온도, 에너지 소비)을 Vision 모델의 학습 과정의 일부로 사용하거나 Vision 기반 발열량 추정 보정을 위한 기준으로 사용한다.
    - **FMU 보정:** 집계된 센서 및 Vision 데이터를 사용하여 FMU 모델 자체를 보정한다.
- **기술:**
    - **공간 매핑:** BIM은 기하학적 및 의미론적 프레임워크를 제공한다. Vision 시스템 출력(예: 재실자 좌표)은 BIM 존에 매핑되어야 한다.
    - **데이터 융합:** 다중 소스 데이터 융합 기술 24은 환경 센서(온도, CO2)와 Vision 시스템(재실자 수, 활동 수준)의 이기종 데이터를 통합할 수 있다. 딥 멀티모달 인코더(DME)와 같은 딥러닝 접근 방식은 멀티모달 데이터에 대한 공유 표현을 찾고 누락된 값을 처리할 수 있다.51
    - **디지털 트윈 컨텍스트:** 이 프로세스는 본질적으로 FMU가 시뮬레이션 핵심이고, BIM이 정적 컨텍스트이며, 센서/Vision 데이터가 실시간 업데이트 및 보정 입력을 제공하는 디지털 트윈을 구축하고 개선하는 것이다.52

"매칭" 프로세스는 단순한 비교가 아니라 복잡한 데이터 융합 및 모델 보정 작업이다. 이는 Vision 시스템의 환경 영향 추정 정확도와 실제 건물을 나타내는 FMU의 충실도를 모두 향상시키기 위한 핵심 피드백 루프를 형성한다. 사용자 단계 7은 "Vision 결과와 BIM/FMU 결과를 매칭하여 Vision 학습"이다. "매칭"은 서로 다른 소스의 데이터 간의 대응 관계를 설정하는 것을 의미한다. BIM은 공간적 맥락(예: 존 경계, 속성)을 제공하고, Vision은 재실자 위치/활동을 제공하며, FMU는 시뮬레이션된 열 상태를 제공한다. "Vision 모델을 훈련"하기 위해, 예를 들어 재실자로부터의 내부 발열량에 대한 Vision 시스템의 해석은 FMU의 그러한 발열량 영향 시뮬레이션 결과와 비교되거나, 사용 가능한 경우 직접 센서 측정값에 의해 정보를 받아야 한다. 이를 위해서는 공간적으로나 시간적으로 이질적인 데이터를 정렬하기 위한 강력한 데이터 융합이 필요하다.50 이 피드백 루프는 디지털 트윈 보정 54 및 모델 기반 머신러닝 58의 특징이다. 이 단계의 성공은 Vision 시스템이 환경 조건을 얼마나 잘 추론할 수 있는지를 결정하므로 센서 최소화 목표에 중추적인 역할을 한다.

### **B. 시스템 향상을 위한 머신러닝**

### **1. Vision 모델 훈련 (사용자 단계 7)**

위에서 설명한 바와 같이, 재실자 감지, 활동 인식 및 발열량 추정을 위한 Vision 모델은 해당 출력/추론을 FMU 시뮬레이션 결과 및 잠재적으로 직접 센서 측정값과 비교하여 훈련/개선될 것이다. 예를 들어, Vision 시스템이 3명의 활동적인 재실자로 인해 특정 발열량을 추정하는 경우, FMU는 해당 존의 온도 상승을 시뮬레이션할 수 있다. 이 시뮬레이션된 상승은 실제 센서 판독값(사용 가능한 경우)과 비교되거나 Vision 시스템의 발열량 계수를 개선하는 데 사용될 수 있다. 3638 및 33 (B15)와 같은 연구는 Vision 감지 재실/장비를 사용하여 발열량을 추정하고 표준 스케줄과 비교하거나 건물 에너지 시뮬레이션에 사용하는 것을 보여준다. 사용자의 계획은 FMU 출력과의 더 긴밀한 루프를 생성하여 이를 더욱 발전시킨다. Autotune 프로젝트 24에서와 같이 광범위한 파라메트릭 시뮬레이션으로 훈련된 머신러닝 에이전트는 건물 에너지 모델을 보정할 수 있다. 여기서도 유사한 원리가 적용되며, FMU/BIM이 "모델" 역할을 하고 Vision/센서 데이터가 훈련/보정을 위한 "측정값"이 된다.

### **2. 활동 인식에서의 전이 학습 역할 (사용자 단계 7 관련)**

전이 학습은 관련 환경 또는 사전 훈련된 모델의 지식을 활용하여 대상 학습자(예: 특정 건물에 대한 활동 인식 모델)의 성능을 향상시킬 수 있다.60 이는 특정 배포에 대한 레이블이 지정된 데이터가 부족할 때 특히 유용하다. 29 (B18)은 전이 학습을 성공적으로 사용하여 저해상도 열화상 이미지를 사용한 재실 감지를 위해 (COCO에서 사전 훈련된) YOLOv5 모델을 미세 조정했다. 61 (B23)는 스마트 빌딩에서 재실 감지 및 활동 인식을 전이 학습의 주요 적용 분야로 식별한다.

전이 학습은 특히 건물별 주석 데이터가 제한적인 초기 단계에서 Vision 기반 활동 인식 구성 요소의 개발을 크게 가속화하고 견고성을 향상시킬 수 있다. 사용자는 강력한 Vision 기반 활동 인식이 필요하다. HAR을 위한 딥러닝 모델 훈련에는 일반적으로 대규모 레이블 데이터 세트가 필요하다.34 모든 새 건물이나 공간에 대해 이러한 데이터 세트를 수집하고 레이블을 지정하는 것은 시간과 비용이 많이들 수 있다. 전이 학습 60을 사용하면 COCO 또는 일반 활동 데이터 세트와 같은 일반적이고 대규모 데이터 세트에서 훈련된 모델의 지식을 활용하고 더 적은 양의 특정 데이터로 특정 컨텍스트(건물, 카메라 뷰, 재실자 행동)에 맞게 조정할 수 있다. 이를 통해 Vision 시스템 개발이 더욱 실용적이고 확장 가능해진다.

### **C. 센서 최소화를 향하여 (사용자 단계 8)**

### **1. 센서리스/최소 센서 운영을 위한 훈련된 모델 활용**

궁극적인 목표는 훈련된 Vision 모델(및 보정된 FMU)을 사용하여 공간 환경 조건을 추론함으로써 고밀도 물리적 센서 그리드에 대한 의존도를 줄이는 것이다. Vision 시스템이 재실자, 활동 및 관련 발열량을 정확하게 감지하고 FMU가 잘 보정되면 시스템은 더 적은 직접 측정으로 환경 상태를 예측할 수 있다. 여기에는 Vision 시스템을 "가상 센서" 또는 "소프트 센서"로 사용하는 것이 포함된다.

### **2. 센서 네트워크 최적화/감소를 위한 강화 학습(RL) 잠재력**

RL은 시행착오를 통해 최적의 제어 전략을 학습하는 데 사용될 수 있다.62 해당 자료들은 BEMS 제어를 위한 RL에 초점을 맞추고 있지만, 최적 정책 학습 원칙은 센서 네트워크 관리로 확장될 수 있다. 예를 들어, RL 에이전트는 모델 정확도 유지 또는 특정 이벤트 감지에 가장 중요한 센서를 학습하고 센서를 동적으로 활성화/비활성화하거나 최적의 희소 구성을 제안할 수 있다. 사용자의 계획은 고밀도 그리드로 모델을 *훈련*한 다음 이를 *줄이는* 데 초점을 맞추고 있지만, RL은 학습된 중요도 또는 예측 불확실성에 따라 시간이 지남에 따라 센서 구성을 조정하는 보다 동적인 센서 최소화 접근 방식을 제공할 수 있다. 이는 모델이 훈련되면 단순히 센서를 제거하는 것보다 더 정교한 접근 방식이다.

### **3. 희소 센싱을 위한 데이터 동화(Data Assimilation, DA) 기술**

DA는 모델을 실시간(그리고 잠재적으로 희소한) 데이터와 통합하여 예측을 개선하기 위한 프레임워크를 제공한다.64 칼만 필터 및 입자 필터와 같은 방법 64은 모델(이 경우 FMU)의 예측 능력을 활용하여 불완전하거나 노이즈가 있는 센서 데이터로도 시스템 상태를 추정할 수 있다. 65 (B27)은 DA와 ML을 결합하여 고충실도 모델의 대리 모델로 NIROM(Non-Intrusive Reduced-Order Models)을 사용하고 관측값을 동화하는 것에 대해 논의한다. 이는 보정된 FMU와 훈련된 Vision 모델이 이러한 대리 시스템을 형성할 수 있는 사용자의 목표와 매우 관련이 있다. 디지털 트윈 패러다임은 본질적으로 사용 가능한 센서 데이터를 사용하여 가상 모델을 물리적 자산과 동기화 상태로 유지하기 위해 DA를 포함한다.66

데이터 동화는 센서 최소화 단계를 위한 핵심 지원 방법론이다. 물리적 센서 그리드가 희소해짐에 따라, 제한된 센서 판독값을 FMU 및 Vision 추론 데이터의 예측과 최적으로 "융합"하여 공간 환경에 대한 정확한 이해를 유지하는 데 DA 기술이 매우 중요할 것이다. 센서 최소화(사용자 단계 8)는 직접 측정이 줄어드는 것을 의미한다. 시스템은 여전히 상세한 공간 환경을 추정해야 한다. DA 64는 모델 예측과 희소/노이즈 관측값을 결합하여 최상의 상태 추정치를 얻도록 특별히 설계되었다. 이 맥락에서 "모델"은 FMU(Vision 기반 입력으로 정보를 받음)이고 "관측값"은 최소화된 센서 세트의 판독값이다. DA 기술은 희소 센서가 나타내는 현실을 향해 FMU의 상태를 "조정"하여 물리적 센서로 직접 커버되지 않는 영역에 대한 센서리스 추정의 정확도를 향상시킨다. 이를 통해 센서리스 또는 최소 센서 환경이 더욱 견고하고 신뢰할 수 있게 된다.

## **V. 전체 시스템 실현 가능성, 과제 및 권장 사항**

### **A. 통합 시스템 아키텍처: 실행 가능성 및 잠재적 병목 현상**

- **실행 가능성:** 초개인화 환경을 위한 BIM, FMU, 센서 및 Vision 통합이라는 전반적인 개념은 기술적으로 야심 차지만 스마트 빌딩 및 디지털 트윈 분야의 현재 연구 동향과 일치한다.1 각 구성 요소 기술은 어느 정도 성숙되어 있다.
- **잠재적 병목 현상:**
    - **데이터 흐름 및 상호 운용성:** 이기종 구성 요소(Revit, EnergyPlus, FMU, 센서 플랫폼, Vision 시스템, 날씨 API) 간의 원활하고 시기적절한 데이터 흐름을 보장하는 것은 주요 과제이다.54 FMI가 도움이 되지만 시스템 수준 통합에는 신중한 설계가 필요하다.
    - **계산 부하:** 실시간 Vision 처리, 빈번한 FMU 시뮬레이션(여러 구역 또는 예측 시나리오에 대해 잠재적으로 다수), ML 모델 훈련/추론은 계산 집약적일 수 있다.54 에지/클라우드 컴퓨팅 전략이 필요할 것이다.22
    - **모델 보정 및 검증:** 시간 경과 및 다양한 조건에서 정확성을 보장하기 위해 FMU 및 Vision 모델을 지속적으로 보정하는 것은 복잡하고 지속적인 작업이다.38
    - **확장성:** 많은 구역과 재실자가 있는 대규모 건물로 시스템을 확장하면 위의 과제가 악화될 것이다.

### **B. 주요 기술적 과제**

- **데이터 동기화:** 다양한 소스(날씨, 센서, Vision, FMU)의 서로 다른 지연 시간 및 시간 단계를 가진 비동기 데이터를 처리하려면 보간/외삽 및 고급 공동 시뮬레이션 기술을 포함한 강력한 동기화 메커니즘이 필요하다.44 FMI 3.0 기능이 여기서 유용할 수 있다.5
- **모델 정확도 및 불확실성 전파:**
    - BIM-to-IDF 변환 오류 2는 FMU로 전파될 수 있다.
    - Vision 기반 발열량 및 활동 추정에는 고유한 불확실성이 있다.33
    - FMU 자체는 현실의 추상화이다.
    - 시스템을 통해 이러한 불확실성이 전파되는 것을 관리하고 정량화하는 것은 신뢰할 수 있는 의사 결정에 매우 중요하다.
- **계산 부하:** 앞서 언급했듯이 Vision 데이터의 실시간 처리, 잠재적으로 많은 FMU 인스턴스 또는 복잡한 FMU 실행, ML 추론/훈련은 DT 문헌에서 논의된 중요한 과제이다.54
- **다양한 도구 및 표준의 상호 운용성:** 시뮬레이션 코어를 위한 FMI 외에도 자체 API 및 데이터 형식을 가진 여러 공급업체의 소프트웨어 및 하드웨어를 통합하는 것은 복잡하다.55
- **개인 정보 보호:** 카메라를 사용한 지속적인 모니터링은 기술적(예: 열화상 이미징 29, 에지 처리 32, 익명화 31) 및 정책적 조치를 통해 해결해야 하는 심각한 개인 정보 보호 문제를 야기한다.

시스템의 복잡성은 개별 기술뿐만 아니라 긴밀하고 실시간으로 결합된 기술에서 비롯된다. 인터페이스, 데이터 교환 프로토콜 및 강력한 오류 처리에 중점을 둔 "시스템 오브 시스템즈(system of systems)" 엔지니어링 접근 방식이 필요하다. 특히 여러 공급업체 또는 기술의 솔루션을 구성할 때 "디지털 트윈 상호 운용성"의 과제 55는 여기에 직접 적용된다. 제안된 시스템에는 BIM 소프트웨어(Revit), 에너지 시뮬레이션(EnergyPlus), FMU 표준, 다양한 물리적 센서, 카메라 하드웨어, Vision 처리 알고리즘(Python 기반 가능성 높음), 날씨 데이터 API 및 ML 프레임워크와 같은 여러 개별 기술 구성 요소가 포함된다. 이러한 구성 요소는 실시간 또는 거의 실시간으로 데이터를 교환해야 한다. 54 (B28)은 DT 과제로 "효과적인 통신 및 데이터 축적의 복잡성"과 "고충실도 트윈을 지원하기 위한 처리 능력 부족"을 나열한다. 55 (B29)는 특히 다른 구성 요소가 동일한 공급업체에서 설계되지 않았거나 동일한 기술을 사용하지 않을 수 있는 "시스템 오브 디지털 트윈즈(SoDTs)"의 상호 운용성 문제를 광범위하게 논의한다. 사용자의 시스템은 사실상 SoDT이다. 예를 들어 FMU는 하나의 "디지털 트윈" 구성 요소이고, 실시간 재실 정보를 제공하는 Vision 시스템은 또 다른 디지털 정보 계층이며, 센서 네트워크는 또 다른 계층을 제공한다. 이러한 구성 요소가 잠재적으로 다른 플랫폼 및 통신 프로토콜에서 동기화된 시간과 의미론적으로 이해되는 데이터로 서로 안정적으로 "통신"할 수 있도록 보장하는 것은 주요 기술적 장애물이다. FMI는 시뮬레이션 모델에 대해 이 부분 중 일부를 해결하지만 전체 시스템 통합은 더 광범위하다.

### **C. 단계적 구현 및 향후 전망**

- 사용자의 8단계에서 암시된 바와 같이 단계적 접근 방식이 적극 권장된다.
    - 1단계: BIM 생성, IDF 변환, 초기 FMU 생성 및 테스트.
    - 2단계: 센서 그리드 배치 및 환경 데이터 수집. 기본 재실 및 활동을 위한 Vision 시스템 개발.
    - 3단계: FMU와 실시간 날씨 및 예비 Vision 데이터 통합. 초기 모델 보정.
    - 4단계: BIM/FMU 매칭을 사용한 고급 Vision 모델 훈련.
    - 5단계: DA 및 개선된 모델을 활용한 점진적인 센서 최소화 실험.
- **향후 전망:** 이 시스템은 포괄적인 건물 디지털 트윈으로 발전하여 52 초개인화된 환경 제어를 넘어 고급 분석, 예측 유지보수 및 지속적인 최적화를 가능하게 할 잠재력이 있다. 강력한 데이터 동화 64 및 ML 기반 센서 최소화 60 기술 개발이 핵심 연구 분야가 될 것이다.

## **VI. 결론 및 권고 사항**

제안된 FMU, 센서 및 Vision 기술 통합 시스템은 건물 거주자에게 초개인화된 최적 환경을 제공할 수 있는 혁신적인 잠재력을 가지고 있다. 전반적인 기술적 실현 가능성은 높다고 판단되나, 상당한 엔지니어링 노력과 단계별 검증이 요구된다.

주요 결론 및 권고 사항은 다음과 같다:

1. **초기 데이터 파이프라인 품질 확보의 중요성:** BIM 모델 생성, EnergyPlus IDF로의 변환, 그리고 초기 FMU 생성 단계에서 데이터의 정확성과 완전성을 확보하는 것이 전체 시스템 성공의 가장 중요한 선결 과제이다. 이 과정에서의 오류는 후속 단계로 전파되어 시스템 전체의 신뢰도를 저해할 수 있으므로, 전문 도구 활용 및 세심한 검증이 필수적이다.2
2. **FMI 표준 버전의 전략적 선택:** 초기 FMU 개발에는 EnergyPlusToFMU 도구의 성숙한 지원을 고려하여 FMI 2.0을 활용하는 것이 현실적이다.9 동시에, Vision 시스템 및 다양한 센서로부터의 복잡한 실시간 데이터 통합과 향상된 공동 시뮬레이션 기능을 위해 FMI 3.0의 잠재력을 주시하고, 향후 시스템 고도화 단계에서 도입을 검토해야 한다.5
3. **견고한 데이터 관리, 동기화 및 융합 전략 수립:** 다양한 이기종 소스(기상청, 환경 센서, Vision 시스템)로부터 수집되는 실시간 데이터를 FMU 시뮬레이션과 효과적으로 통합하기 위해서는 정교한 데이터 동기화, 시간 보간/외삽, 데이터 융합 기술이 핵심적이다.44 이를 위한 마스터 알고리즘 또는 공동 시뮬레이션 플랫폼의 신중한 선택과 설계가 요구된다.
4. **Vision 시스템의 정확도, 개인정보보호 및 추론 능력 강화:** Vision 기술은 재실자 감지, 활동 인식, 내부 발열량 추정 등 시스템의 핵심 정보를 제공한다. 따라서 Vision 모델의 정확도 향상, 개인정보보호 문제 해결(예: 저해상도 열화상 카메라 사용, 에지 컴퓨팅 기반 익명화 처리 29), 그리고 감지된 정보로부터 신뢰성 있는 열 부하 및 활동 수준을 추론하는 알고리즘 개발에 집중적인 연구 개발 노력이 필요하다.
5. **단계적 개발 및 파일럿 프로젝트를 통한 검증:** 시스템의 복잡성을 고려할 때, 제안된 8단계와 같은 단계적 개발 접근 방식이 필수적이다. 각 단계의 기술적 실현 가능성을 검증하고 통합 과정에서의 문제점을 조기에 발견하여 해결하기 위해, 잘 계측된 실제 공간에서의 파일럿 프로젝트 수행을 강력히 권고한다. 이를 통해 점진적으로 시스템을 구축하고 완성도를 높여나가야 한다.
6. **센서 최소화 전략의 고도화:** 장기 목표인 최소 센서 또는 센서리스 환경 구축을 위해서는, 훈련된 모델의 예측 정확도에 대한 지속적인 검증과 함께, 데이터 동화(Data Assimilation) 64 및 강화학습(Reinforcement Learning) 62과 같은 고급 기법을 탐색하여 센서 네트워크를 동적으로 최적화하고 모델 기반 추론의 신뢰성을 높이는 방안을 고려해야 한다.

이러한 권고 사항들을 체계적으로 이행한다면, 본 시스템은 건물 에너지 효율성 증대와 거주자 쾌적성 극대화라는 두 가지 목표를 동시에 달성하며, 미래 지능형 건물 기술의 중요한 이정표가 될 수 있을 것이다.

### 참고 자료

1. etcc-ca.com, 5월 22, 2025에 액세스, [https://etcc-ca.com/sites/default/files/reports/dr11sce09_energyplus_based_tool_development_feasibility_study_report.pdf](https://etcc-ca.com/sites/default/files/reports/dr11sce09_energyplus_based_tool_development_feasibility_study_report.pdf)
2. Interoperability between Autodesk Revit and EnergyPlus for thermal ..., 5월 22, 2025에 액세스, [https://doaj.org/article/2cff08c0ba614634a1586403061919f0](https://doaj.org/article/2cff08c0ba614634a1586403061919f0)
3. Exporting Energy Models from Revit | Pollination Docs, 5월 22, 2025에 액세스, [https://docs.pollination.solutions/user-manual/revit-plugin/export-analytical-model](https://docs.pollination.solutions/user-manual/revit-plugin/export-analytical-model)
4. What is FMI? | Modelon, 5월 22, 2025에 액세스, [https://modelon.com/blog/functional-mock-up-interface-fmi/](https://modelon.com/blog/functional-mock-up-interface-fmi/)
5. FMI – Functional Mock-up Interface - ASAM, 5월 22, 2025에 액세스, [https://report.asam.net/fmi-functional-mock-up-interface](https://report.asam.net/fmi-functional-mock-up-interface)
6. eepublicdownloads.blob.core.windows.net, 5월 22, 2025에 액세스, [https://eepublicdownloads.blob.core.windows.net/public-cdn-container/clean-documents/Network%20codes%20documents/GC%20ESC/GC%20ESC%20MEETING%20DOCS/2025/20250319_FMI_Introduction.pdf](https://eepublicdownloads.blob.core.windows.net/public-cdn-container/clean-documents/Network%20codes%20documents/GC%20ESC/GC%20ESC%20MEETING%20DOCS/2025/20250319_FMI_Introduction.pdf)
7. About - Functional Mock-up Interface, 5월 22, 2025에 액세스, [https://fmi-standard.org/about/](https://fmi-standard.org/about/)
8. (PDF) Title Functional Mock-Up Unit Import in EnergyPlus For Co ..., 5월 22, 2025에 액세스, [https://www.researchgate.net/publication/330505735_Title_Functional_Mock-Up_Unit_Import_in_EnergyPlus_For_Co-Simulation](https://www.researchgate.net/publication/330505735_Title_Functional_Mock-Up_Unit_Import_in_EnergyPlus_For_Co-Simulation)
9. 4. Creating an FMU — FMU Export of EnergyPlus User Guide, 5월 22, 2025에 액세스, [https://simulationresearch.lbl.gov/fmu/EnergyPlus/export/userGuide/build.html](https://simulationresearch.lbl.gov/fmu/EnergyPlus/export/userGuide/build.html)
10. 6. Activity 1.2: Co-simulation and Model Exchange Using the FMI Standard - Annex 60, 5월 22, 2025에 액세스, [https://www.iea-annex60.org/finalReport/activity_1_2.html](https://www.iea-annex60.org/finalReport/activity_1_2.html)
11. Export Simulink Model to Standalone FMU - MathWorks, 5월 22, 2025에 액세스, [https://www.mathworks.com/help/slcompiler/ug/simulinkfmuexample.html](https://www.mathworks.com/help/slcompiler/ug/simulinkfmuexample.html)
12. Create Standalone FMU - MATLAB & Simulink - MathWorks, 5월 22, 2025에 액세스, [https://www.mathworks.com/help/slcompiler/create-standalone-fmus.html](https://www.mathworks.com/help/slcompiler/create-standalone-fmus.html)
13. FMU Examples: External Interface(s) Application Guide — EnergyPlus 8.6, 5월 22, 2025에 액세스, [https://bigladdersoftware.com/epx/docs/8-6/external-interfaces-application-guide/fmu-examples.html](https://bigladdersoftware.com/epx/docs/8-6/external-interfaces-application-guide/fmu-examples.html)
14. Functional Mock-up Interface - FMI — OpenModelica User's Guide ..., 5월 22, 2025에 액세스, [https://openmodelica.org/doc/OpenModelicaUsersGuide/latest/fmitlm.html](https://openmodelica.org/doc/OpenModelicaUsersGuide/latest/fmitlm.html)
15. Exporting Dymola model to FMU for calibration - Claytex, 5월 22, 2025에 액세스, [https://www.claytex.com/blog/exporting-dymola-model-to-fmu-for-calibration/](https://www.claytex.com/blog/exporting-dymola-model-to-fmu-for-calibration/)
16. Build FMUs from Dymola model and run the FMUs in Dymola and Simulink - Claytex, 5월 22, 2025에 액세스, [https://www.claytex.com/tech-blog/build-fmus-from-dymola-model-run-fmus-in-dymola-and-simulink/](https://www.claytex.com/tech-blog/build-fmus-from-dymola-model-run-fmus-in-dymola-and-simulink/)
17. FMPy: Home, 5월 22, 2025에 액세스, [https://fmpy.readthedocs.io/](https://fmpy.readthedocs.io/)
18. Cosimulation : EnergyPlus-Python-FMU - L'hypercube, 5월 22, 2025에 액세스, [https://lhypercube.arep.fr/en/outils/divers/cosimulation/](https://lhypercube.arep.fr/en/outils/divers/cosimulation/)
19. modelica/Reference-FMUs: Functional Mock-up Units for development, testing and debugging - GitHub, 5월 22, 2025에 액세스, [https://github.com/modelica/Reference-FMUs](https://github.com/modelica/Reference-FMUs)
20. How to generate FMU for Python Driven Co-simulation with Simcenter STAR-CCM+?, 5월 22, 2025에 액세스, [https://community.sw.siemens.com/s/article/How-to-generate-FMU-for-Python-Driven-Co-simulation-with-Simcenter-STAR-CCM](https://community.sw.siemens.com/s/article/How-to-generate-FMU-for-Python-Driven-Co-simulation-with-Simcenter-STAR-CCM)
21. Three-Dimensional Air Quality Monitoring and Simulation of Campus Microenvironment Based on UAV Platform - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/2076-3417/14/23/10908](https://www.mdpi.com/2076-3417/14/23/10908)
22. Environmental Monitoring with Distributed Mesh Networks: An Overview and Practical Implementation Perspective for Urban Scenario - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/1424-8220/19/24/5548](https://www.mdpi.com/1424-8220/19/24/5548)
23. A Comprehensive Review of Sensor-Based Smart Building ... - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/2076-3417/14/21/10057](https://www.mdpi.com/2076-3417/14/21/10057)
24. A Review of Multi-Source Data Fusion and Analysis Algorithms in Smart City Construction: Facilitating Real Estate Management and Urban Optimization - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/1999-4893/18/1/30](https://www.mdpi.com/1999-4893/18/1/30)
25. (PDF) SENSOR PLACEMENT STRATEGIES: A REVIEW - ResearchGate, 5월 22, 2025에 액세스, [https://www.researchgate.net/publication/391391867_SENSOR_PLACEMENT_STRATEGIES_A_REVIEW](https://www.researchgate.net/publication/391391867_SENSOR_PLACEMENT_STRATEGIES_A_REVIEW)
26. Optimal Sensor Placement for Structural Health Monitoring: A Comprehensive Review, 5월 22, 2025에 액세스, [https://www.mdpi.com/2224-2708/14/2/22](https://www.mdpi.com/2224-2708/14/2/22)
27. A Systematic Review of Optimization Algorithms for Structural Health Monitoring and Optimal Sensor Placement - PMC, 5월 22, 2025에 액세스, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10052056/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10052056/)
28. Optimal Sensor Placement: A Robust Approach - Mathematical Sciences, 5월 22, 2025에 액세스, [https://math.gmu.edu/~crautenb/ContentHP/Prints/HRMK_SIAM.pdf](https://math.gmu.edu/~crautenb/ContentHP/Prints/HRMK_SIAM.pdf)
29. (PDF) A computer vision-based model for occupancy detection ..., 5월 22, 2025에 액세스, [https://www.researchgate.net/publication/391706468_A_computer_vision-based_model_for_occupancy_detection_using_low-resolution_thermal_images](https://www.researchgate.net/publication/391706468_A_computer_vision-based_model_for_occupancy_detection_using_low-resolution_thermal_images)
30. Deep learning and computer vision based occupancy CO2 level ..., 5월 22, 2025에 액세스, [https://orca.cardiff.ac.uk/id/eprint/178037/](https://orca.cardiff.ac.uk/id/eprint/178037/)
31. Vision-Based Activity Recognition for Unobtrusive Monitoring of the Elderly in Care Settings, 5월 22, 2025에 액세스, [https://www.mdpi.com/2227-7080/13/5/184](https://www.mdpi.com/2227-7080/13/5/184)
32. AI management platform for privacy-preserving indoor air quality control, 5월 22, 2025에 액세스, [https://openrepository.aut.ac.nz/bitstreams/e5b4714d-94b1-48bd-8290-b61db266de52/download](https://openrepository.aut.ac.nz/bitstreams/e5b4714d-94b1-48bd-8290-b61db266de52/download)
33. Inferring Personal Visual Preferences and Heat Gain Estimation in ..., 5월 22, 2025에 액세스, [https://hammer.purdue.edu/articles/thesis/Inferring_Personal_Visual_Preferences_and_Heat_Gain_Estimation_in_Buildings_using_HDRI_and_Deep_Learning_Techniques/27910650](https://hammer.purdue.edu/articles/thesis/Inferring_Personal_Visual_Preferences_and_Heat_Gain_Estimation_in_Buildings_using_HDRI_and_Deep_Learning_Techniques/27910650)
34. Vision-based Human Activity Recognition Uses a Deep Learning ..., 5월 22, 2025에 액세스, [https://www.ijcaonline.org/archives/volume186/number74/sarkar-2025-ijca-924621.pdf](https://www.ijcaonline.org/archives/volume186/number74/sarkar-2025-ijca-924621.pdf)
35. Computer Vision with Deep Learning for Human Activity Recognition: Features Representation | Request PDF - ResearchGate, 5월 22, 2025에 액세스, [https://www.researchgate.net/publication/378306548_Computer_Vision_with_Deep_Learning_for_Human_Activity_Recognition_Features_Representation](https://www.researchgate.net/publication/378306548_Computer_Vision_with_Deep_Learning_for_Human_Activity_Recognition_Features_Representation)
36. A coupled deep learning-based internal heat gains detection and prediction method for energy-efficient office building operation - -ORCA - Cardiff University, 5월 22, 2025에 액세스, [https://orca.cardiff.ac.uk/178039](https://orca.cardiff.ac.uk/178039)
37. The Impact of Using the Application of A CNN-based Approach for Equipment Usage Detection on Building Energy, 5월 22, 2025에 액세스, [https://publications.ibpsa.org/proceedings/bs/2021/papers/bs2021_30211.pdf](https://publications.ibpsa.org/proceedings/bs/2021/papers/bs2021_30211.pdf)
38. A Computer Vision-Based Occupancy and Equipment Usage Detection Approach for Reducing Building Energy Demand - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/1996-1073/14/1/156](https://www.mdpi.com/1996-1073/14/1/156)
39. Component-Level Residential Building Material Stock Characterization Using Computer Vision Techniques | Environmental Science & Technology - ACS Publications, 5월 22, 2025에 액세스, [https://pubs.acs.org/doi/10.1021/acs.est.3c09207](https://pubs.acs.org/doi/10.1021/acs.est.3c09207)
40. Spatial Quantitative Model of Human Activity Disturbance Intensity and Land Use Intensity Based on GF-6 Image, Empirical Study in Southwest Mountainous County, China - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/2072-4292/14/18/4574](https://www.mdpi.com/2072-4292/14/18/4574)
41. Best Free Weather API for Accurate Global Weather Data, 5월 22, 2025에 액세스, [https://weatherstack.com/](https://weatherstack.com/)
42. Open-Meteo.com: 🌤️ Free Open-Source Weather API, 5월 22, 2025에 액세스, [https://open-meteo.com/](https://open-meteo.com/)
43. Functional Mockup Interface (FMI) A General Standard for Model Exchange and Simulator Coupling - WordPress.com, 5월 22, 2025에 액세스, [https://modprodblog.files.wordpress.com/2018/01/modprod2016-day1-tutorial03a-adeelasghar-fmi-2-0-model-exchange-co-simulation.pdf](https://modprodblog.files.wordpress.com/2018/01/modprod2016-day1-tutorial03a-adeelasghar-fmi-2-0-model-exchange-co-simulation.pdf)
44. ijomam.com, 5월 22, 2025에 액세스, [https://ijomam.com/wp-content/uploads/2024/12/pag.-222-231_RESEARCH-ON-A-HYBRID-TIME-EVENT-DRIVEN-CO-SIMULATION-FRAMEWORK-BASED-ON-THE-FMI-STANDARD.pdf](https://ijomam.com/wp-content/uploads/2024/12/pag.-222-231_RESEARCH-ON-A-HYBRID-TIME-EVENT-DRIVEN-CO-SIMULATION-FRAMEWORK-BASED-ON-THE-FMI-STANDARD.pdf)
45. Integration of simulators in the INTO-CPS Platform, 5월 22, 2025에 액세스, [https://into-cps.org/fileadmin/into-cps.org/Filer/D4.1b_Integration_of_simulators.pdf](https://into-cps.org/fileadmin/into-cps.org/Filer/D4.1b_Integration_of_simulators.pdf)
46. Submitted to Journal of Building Performance Simulation - OSTI, 5월 22, 2025에 액세스, [https://www.osti.gov/servlets/purl/1164899](https://www.osti.gov/servlets/purl/1164899)
47. Novel Simulation Concepts for Buildings and Community Energy Systems based on the Functional Mock-up Interface Specification - University of Colorado Boulder, 5월 22, 2025에 액세스, [https://www.colorado.edu/lab/sbs/sites/default/files/attached-files/c21_novel_simulation_concepts_for_buildings_and_community_energy_systems_based_on_the_functional_mock-up_interface_specification.pdf](https://www.colorado.edu/lab/sbs/sites/default/files/attached-files/c21_novel_simulation_concepts_for_buildings_and_community_energy_systems_based_on_the_functional_mock-up_interface_specification.pdf)
48. D2.4 Adapting FMI for Co-simulation to Numerically Stable TLM Couplings - ITEA 4, 5월 22, 2025에 액세스, [https://itea4.org/project/workpackage/document/download/5071/D2.4%20OPENCPS%20-%20Adapting%20FMI%20for%20Co-simulation%20to%20Numerically%20Stable%20TLM%20Couplings%20M36.pdf](https://itea4.org/project/workpackage/document/download/5071/D2.4%20OPENCPS%20-%20Adapting%20FMI%20for%20Co-simulation%20to%20Numerically%20Stable%20TLM%20Couplings%20M36.pdf)
49. TLM-based Asynchronous Co-simulation with the Functional Mockup Interface - ITEA 4, 5월 22, 2025에 액세스, [https://itea4.org/project/workpackage/document/download/5075/D2.4%20OPENCPS%20-%20TLM-based%20Asynchronous%20Co-simulation%20with%20the%20Functional%20Mockup%20Interface.pdf](https://itea4.org/project/workpackage/document/download/5075/D2.4%20OPENCPS%20-%20TLM-based%20Asynchronous%20Co-simulation%20with%20the%20Functional%20Mockup%20Interface.pdf)
50. Review of Data Fusion Methods for Real-Time and Multi-Sensor Traffic Flow Analysis - SciSpace, 5월 22, 2025에 액세스, [https://scispace.com/pdf/review-of-data-fusion-methods-for-real-time-and-multi-sensor-3jy63u90va.pdf](https://scispace.com/pdf/review-of-data-fusion-methods-for-real-time-and-multi-sensor-3jy63u90va.pdf)
51. Heterogeneous Sensor Data Fusion By Deep Multimodal Encoding - ResearchGate, 5월 22, 2025에 액세스, [https://www.researchgate.net/publication/314718282_Heterogeneous_Sensor_Data_Fusion_By_Deep_Multimodal_Encoding](https://www.researchgate.net/publication/314718282_Heterogeneous_Sensor_Data_Fusion_By_Deep_Multimodal_Encoding)
52. (PDF) A Systematic Review of the Digital Twin Technology in ..., 5월 22, 2025에 액세스, [https://www.researchgate.net/publication/385444199_A_Systematic_Review_of_the_Digital_Twin_Technology_in_Buildings_Landscape_and_Urban_Environment_from_2018_to_2024](https://www.researchgate.net/publication/385444199_A_Systematic_Review_of_the_Digital_Twin_Technology_in_Buildings_Landscape_and_Urban_Environment_from_2018_to_2024)
53. Full article: Organising digital twin in the built environment: a systematic review and research directions on the missing links of use and user perspectives of digital twin in Architecture, Engineering and Construction (AEC) sector, 5월 22, 2025에 액세스, [https://www.tandfonline.com/doi/full/10.1080/01446193.2025.2451631?src=exp-la](https://www.tandfonline.com/doi/full/10.1080/01446193.2025.2451631?src=exp-la)
54. repository.mdx.ac.uk, 5월 22, 2025에 액세스, [https://repository.mdx.ac.uk/download/00d2caaa9af7d11f5df84a70d8fc102c0eb5f8d6e31b7af120df0afeb644a887/12601959/DT_Survey_Final_Accepted.pdf](https://repository.mdx.ac.uk/download/00d2caaa9af7d11f5df84a70d8fc102c0eb5f8d6e31b7af120df0afeb644a887/12601959/DT_Survey_Final_Accepted.pdf)
55. Interoperability of Digital Twins: Challenges, Success Factors, and ..., 5월 22, 2025에 액세스, [https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=956427](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=956427)
56. Transforming Hospital HVAC Design with BIM and Digital Twins: Addressing Real-Time Use Changes - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/2071-1050/17/8/3312](https://www.mdpi.com/2071-1050/17/8/3312)
57. The role of HVAC controls in building Digital Twins: lessons learned from demonstration buildings with an application to air handling units - ResearchGate, 5월 22, 2025에 액세스, [https://www.researchgate.net/publication/374660902_The_role_of_HVAC_controls_in_building_Digital_Twins_lessons_learned_from_demonstration_buildings_with_an_application_to_air_handling_units](https://www.researchgate.net/publication/374660902_The_role_of_HVAC_controls_in_building_Digital_Twins_lessons_learned_from_demonstration_buildings_with_an_application_to_air_handling_units)
58. web.eecs.utk.edu, 5월 22, 2025에 액세스, [https://web.eecs.utk.edu/~jnew1/publications/2014_CCPE.pdf](https://web.eecs.utk.edu/~jnew1/publications/2014_CCPE.pdf)
59. (PDF) Learning Strategies for Data-Driven Model Predictive Control ..., 5월 22, 2025에 액세스, [https://www.researchgate.net/publication/385775216_Learning_Strategies_for_Data-Driven_Model_Predictive_Control_of_Building_Energy_Systems](https://www.researchgate.net/publication/385775216_Learning_Strategies_for_Data-Driven_Model_Predictive_Control_of_Building_Energy_Systems)
60. Machine Learning for Smart and Energy-Efficient Buildings | Environmental Data Science, 5월 22, 2025에 액세스, [https://www.cambridge.org/core/journals/environmental-data-science/article/machine-learning-for-smart-and-energyefficient-buildings/CF271F74CEE670ACFA6AA7AAB9798416](https://www.cambridge.org/core/journals/environmental-data-science/article/machine-learning-for-smart-and-energyefficient-buildings/CF271F74CEE670ACFA6AA7AAB9798416)
61. Transfer learning for smart buildings: A critical review of algorithms ..., 5월 22, 2025에 액세스, [https://www.osti.gov/biblio/1869653](https://www.osti.gov/biblio/1869653)
62. Reinforcement Learning for Optimizing Renewable Energy ... - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/1996-1073/18/7/1724](https://www.mdpi.com/1996-1073/18/7/1724)
63. SBA 479: Role of AI and Machine Learning in HVAC Energy Optimization, 5월 22, 2025에 액세스, [https://podcast.smartbuildingsacademy.com/479](https://podcast.smartbuildingsacademy.com/479)
64. Data Assimilation for Agent-Based Models - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/2227-7390/11/20/4296](https://www.mdpi.com/2227-7390/11/20/4296)
65. Data Assimilation with Machine Learning for Dynamical Systems ..., 5월 22, 2025에 액세스, [https://www.imperial.ac.uk/PWP/document/DataAssimilation_with_ML_for_Enclosed_Spaces-246.pdf](https://www.imperial.ac.uk/PWP/document/DataAssimilation_with_ML_for_Enclosed_Spaces-246.pdf)
66. Digital Twins: Synergy Between Data Assimilation and Optimal Control - SIAM.org, 5월 22, 2025에 액세스, [https://www.siam.org/publications/siam-news/articles/digital-twins-synergy-between-data-assimilation-and-optimal-control/](https://www.siam.org/publications/siam-news/articles/digital-twins-synergy-between-data-assimilation-and-optimal-control/)
67. Digital Twins and Civil Engineering Phases: Reorienting Adoption Strategies - arXiv, 5월 22, 2025에 액세스, [https://arxiv.org/html/2403.02426v1](https://arxiv.org/html/2403.02426v1)
68. Case Studies: Successful Projects That Leveraged BIM for Structural Excellence - Kaarwan, 5월 22, 2025에 액세스, [https://www.kaarwan.com/blog/architecture/case-studies-successful-projects-that-leveraged-bim-for-structural-excellence?id=1450](https://www.kaarwan.com/blog/architecture/case-studies-successful-projects-that-leveraged-bim-for-structural-excellence?id=1450)
69. Spatial Insights for Building Resilience: The Territorial Risk Management & Analysis Across Scale Framework for Bridging Scales in Multi-Hazard Assessment - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/2624-6511/8/1/27](https://www.mdpi.com/2624-6511/8/1/27)
70. How BIM Transforms Facility Management Operations - Cupix, 5월 22, 2025에 액세스, [https://www.cupix.com/resources/how-bim-transforms-facility-management-operations](https://www.cupix.com/resources/how-bim-transforms-facility-management-operations)
71. 6. A Case Study on BIM Integration Data Management in Construction Projects, 5월 22, 2025에 액세스, [https://uw.pressbooks.pub/2024innovationcm515/chapter/unlocking-efficiency-a-case-study-on-bim-integration-data-management-in-construction-projects/](https://uw.pressbooks.pub/2024innovationcm515/chapter/unlocking-efficiency-a-case-study-on-bim-integration-data-management-in-construction-projects/)
72. Influence of Complex Occupant Behavior Models on Cooling Energy Usage Analysis - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/2071-1050/13/3/1243](https://www.mdpi.com/2071-1050/13/3/1243)
73. A Coordination Layer for Time Synchronization in Level-4 Multi-vECU Simulation - MDPI, 5월 22, 2025에 액세스, [https://www.mdpi.com/2079-9292/14/8/1690](https://www.mdpi.com/2079-9292/14/8/1690)
74. HELICS: A Co-Simulation Framework for Scalable Multi-Domain Modeling and Analysis - Publications, 5월 22, 2025에 액세스, [https://docs.nrel.gov/docs/fy24osti/87610.pdf](https://docs.nrel.gov/docs/fy24osti/87610.pdf)
75. PIR Sensor-Based Occupancy Monitoring in Smart Buildings: A Review of Methodologies and Machine Learning Approaches - Preprints.org, 5월 22, 2025에 액세스, [https://www.preprints.org/manuscript/202401.1924/v1](https://www.preprints.org/manuscript/202401.1924/v1)
76. gemseo-fmu - PyPI, 5월 22, 2025에 액세스, [https://pypi.org/project/gemseo-fmu/](https://pypi.org/project/gemseo-fmu/)
77. An analysis of solar gain through externally shaded window of buildings - ResearchGate, 5월 22, 2025에 액세스, [https://www.researchgate.net/publication/245189881_An_analysis_of_solar_gain_through_externally_shaded_window_of_buildings](https://www.researchgate.net/publication/245189881_An_analysis_of_solar_gain_through_externally_shaded_window_of_buildings)
78. Pathway to Zero Energy Windows: Advancing Technologies and Market Adoption - NREL, 5월 22, 2025에 액세스, [https://www.nrel.gov/docs/fy22osti/80171.pdf](https://www.nrel.gov/docs/fy22osti/80171.pdf)