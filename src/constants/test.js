function combination(arr, selectNumber) {
	const result = [];
	if (selectNumber === 1) return arr.map(el => [el]);
	// n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

	arr.forEach((fixed, index, origin) => {
		const rest = origin.slice(index + 1);
		// 해당하는 fixed를 제외한 나머지 뒤
		const restCombination = combination(rest, selectNumber - 1);
		// 나머지에 대해서 조합을 구한다.
		const attached = restCombination.map(el => [fixed, ...el]);
		//  돌아온 조합에 떼 놓은(fixed) 값 붙이기
		result.push(...attached);
		// 배열 spread syntax 로 모두다 push
	});

	return result; // 결과 담긴 results return
}

console.log(combination([1, 2, 3, 4], 3));
