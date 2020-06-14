let obj = {
    name: {
       firstName: '彭',
       lastName: '湖湾'
    },
    job: '学生'
 }
  
 let copyObj = {...obj}
 copyObj.job = '程序猿'
 copyObj.name.lastName = '一拳'
 console.log(copyObj,obj)