/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   nextInLine.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 21:46:12 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 21:46:58 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


function nextInLine(arr, item) 
{
    arr.push(item);
    return arr.shift();
}
  
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 10));
  console.log("After: " + JSON.stringify(testArr));