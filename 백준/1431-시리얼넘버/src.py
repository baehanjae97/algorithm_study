exampleDataFile = open('data.txt','r')

# 1 필요한 데이터 입력 갯수를 가져온다.
# n = input()
inputCount = exampleDataFile.readline()
# print(n)

# 2 soting 에 상요할 리스트 정의 
sortingGroup = []

# 2 그리고 이후는 for 문을 사용하여서 입력된 데이터들을 하나씩 사용한다.
for i in range(int(inputCount)):
  #* 3 리스트에 넣기 위한 딕셔너리 정의 
  oneObject = {}

  originInput = exampleDataFile.readline().rstrip()

  #* 4 해당 값 자체를 넣는다. > originData
  oneObject['originInput'] = originInput
  # print(oneObject['originInput'])

  #* 5 데이터를 넣으면서 해당 데이터의 전체 길이를 딕셔너리에 한 값으로 넣는다. > length   
  lengthOfInput = len(originInput)
  # print(lengthOfInput)
  oneObject['lengthOfInput'] = lengthOfInput

  #* 6 그 다음으로 자리수의 합을 딕셔너리에 추가한다. > numberSum
  sum = 0
  for j in list(originInput):
    if(j.isdigit()) :
      sum += int(j)
  # print(sum)
  oneObject['sumOfNumber'] = sum

  #* 7 sortedData 를 사용해서 해당 값들을 한번 더 비교한다.
  for k in range(len(sortingGroup)):
    if k == 0 :
      continue

    if k != 0 :  
      existingData = sortingGroup[k]

      # print(existingData.lengthOfInput)
      print(oneObject.lengthOfInput)

  sortingGroup.append(oneObject)
  

  